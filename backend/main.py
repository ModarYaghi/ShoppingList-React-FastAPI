from typing import List

import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


class Item(BaseModel):
    name: str


class ShoppingList(BaseModel):
    shopping_list: List[Item]


app = FastAPI(debut=True)

origins = ["http://localhost:5173"]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

memory_db = {"shopping_list": []}


@app.get("/shopping_list", response_model=ShoppingList)
def get_items():
    return ShoppingList(shopping_list=memory_db["shopping_list"])


@app.post("/item", response_model=Item)
def add_item(item: Item):
    memory_db["shopping_list"].append(item)
    return item


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
