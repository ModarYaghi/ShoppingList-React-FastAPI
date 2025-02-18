# We import the List type from the typing module so we can define lists in our data models.
from typing import List

# uvicorn is an ASGI server used to run our FastAPI app.
import uvicorn

# FastAPI is the framework we are using to build our web API.
from fastapi import FastAPI

# CORSMiddleware is used to enable Cross-Origin Resource Sharing, which allows our backend
# to be accessed from a different origin (domain, port, or protocol) such as our React frontend.
from fastapi.middleware.cors import CORSMiddleware

# Pydantic's BaseModel allows us to define data models with type validation.
from pydantic import BaseModel


# Define a data model for an item in our shopping list.
# Each item has a 'name' which is a string.
class Item(BaseModel):
    name: str


# Define a data model for the shopping list.
# The shopping list contains a list of Item objects.
class ShoppingList(BaseModel):
    shopping_list: List[Item]


# Create an instance of the FastAPI application.
# The parameter `debut=True` is likely a typo,
# so if it's intended to be used for debugging or similar, it may need to be adjusted.
app = FastAPI(debut=True)

# Define the origins that are allowed to access this API.
# Here, we are allowing only requests coming from 'http://localhost:5173', which is where our frontend runs.
origins = ["http://localhost:5173"]

# Add CORS middleware to the application.
# This enables our backend to accept requests from the specified origins.
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Which origins are allowed
    allow_credentials=True,  # Allow cookies and authentication information
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

# Create an in-memory "database" to store our shopping list items.
# This is a simple dictionary that mimics a database for demonstration purposes.
memory_db = {"shopping_list": []}


# Define a GET endpoint to retrieve the shopping list.
# When a GET request is sent to "/shopping_list", this function is called.
# The response_model parameter tells FastAPI to format the response according to the ShoppingList model.
@app.get("/shopping_list", response_model=ShoppingList)
def get_items():
    # Return a ShoppingList object with the current items in our memory_db.
    return ShoppingList(shopping_list=memory_db["shopping_list"])


# Define a POST endpoint to add a new item to the shopping list.
# When a POST request is sent to "/item" with a JSON body, FastAPI converts the JSON into an Item instance.
@app.post("/item", response_model=Item)
def add_item(item: Item):
    # Append the new item to our in-memory database list.
    memory_db["shopping_list"].append(item)
    # Return the added item as confirmation.
    return item


# This block checks if this file is being run as the main program.
# If so, it starts the Uvicorn server with our FastAPI app.
if __name__ == "__main__":
    # Run the app on host "0.0.0.0" (accessible on your local network) and port 8000.
    uvicorn.run(app, host="0.0.0.0", port=8000)
