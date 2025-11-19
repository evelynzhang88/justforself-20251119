# 如何终止占用端口的进程

## 方法一：使用 lsof 和 kill（推荐）

### 查找占用端口的进程
```bash
# 查找占用 3000 端口的进程
lsof -ti:3000

# 或者查看详细信息
lsof -i:3000
```

### 终止进程
```bash
# 终止占用 3000 端口的进程
kill -9 $(lsof -ti:3000)

# 或者分步执行
lsof -ti:3000 | xargs kill -9
```

## 方法二：使用 pkill（简单快速）

```bash
# 终止所有 Next.js 进程
pkill -f "next dev"

# 终止所有 Node.js 进程（谨慎使用）
pkill node
```

## 方法三：使用 killall

```bash
# 终止所有 node 进程
killall node

# 终止所有 next 相关进程
killall -9 node
```

## 方法四：查找并手动终止

```bash
# 查找 Next.js 进程
ps aux | grep "next dev"

# 找到进程 ID (PID) 后，使用 kill 终止
kill -9 <PID>
```

## 常用端口清理脚本

创建一个便捷脚本 `kill-port.sh`：

```bash
#!/bin/bash
PORT=$1
if [ -z "$PORT" ]; then
  echo "Usage: ./kill-port.sh <port>"
  exit 1
fi

PID=$(lsof -ti:$PORT)
if [ -z "$PID" ]; then
  echo "No process found on port $PORT"
else
  kill -9 $PID
  echo "Killed process $PID on port $PORT"
fi
```

使用方法：
```bash
chmod +x kill-port.sh
./kill-port.sh 3000
```

## 针对本项目

### 终止前端开发服务器
```bash
cd frontend
pkill -f "next dev"
```

### 终止后端开发服务器
```bash
cd backend
pkill -f "strapi develop"
```

### 一键清理所有相关进程
```bash
# 终止所有 Next.js 和 Strapi 进程
pkill -f "next dev"
pkill -f "strapi develop"
```

## 注意事项

⚠️ **警告**：
- `kill -9` 是强制终止，进程无法正常关闭，可能导致数据丢失
- 建议先尝试 `kill <PID>`（正常终止），如果不行再使用 `kill -9`
- `killall node` 会终止所有 Node.js 进程，可能影响其他正在运行的项目

## 验证端口是否已释放

```bash
# 检查端口是否还在使用
lsof -i:3000

# 如果没有输出，说明端口已释放
```

