from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello World"}

# นี่คือ Endpoint ใหม่ที่ขั้นตอนที่ 2 สั่งให้เพิ่มครับ
@app.get("/hello/{name}")
def say_hello(name: str):
    return {"message": f"Hello from {name}!"}
