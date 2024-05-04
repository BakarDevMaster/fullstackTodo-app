from http.client import HTTPException
from dotenv import load_dotenv
import uvicorn
import os
from fastapi import FastAPI
from typing import  Optional
from sqlmodel import Field, Session, SQLModel, create_engine, select

class Todo(SQLModel, table=True):
    id:Optional[int ] | None = Field(default=None, primary_key=True)
    task: str = Field(index=True)

load_dotenv()

sqlite_url = "postgresql://default:oP4FXDBMx5AY@ep-lingering-hat-a4v3w0xe.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"


engine = create_engine(sqlite_url)

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)

app = FastAPI()



@app.on_event("startup")
def on_startup():
    create_db_and_tables()

@app.post("/todos/")
def create_todo(hero: Todo):
    with Session(engine) as session:
        session.add(hero)
        session.commit()
        session.refresh(hero)
        return "todo posted"

@app.get("/todos/")
def read_todo():
    with Session(engine) as session:
        heroes = session.exec(select(Todo)).all()
        return heroes
    
    
@app.put("/todos/")
def update_heroes(task:Todo):
    with Session(engine) as session:
        statement = select(Todo).where(Todo.id == task.id)
        results = session.exec(statement)
        hero = results.one()
    

        hero.task= task.task
        session.add(hero)
        session.commit()
        session.refresh(hero)
        return "todo updated"
    
    
@app.delete("/todos/")
def delete_task(task:Todo):
    with Session(engine) as session:
        statement = select(Todo).where(Todo.id == task.id)
        results = session.exec(statement)
        hero = results.one()
        session.delete(hero)
        session.commit()
        return "task deleted"
       

def start():
    uvicorn.run("todo.main:app", host="127.0.0.1", port=8080, reload=True)
