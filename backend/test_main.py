# Import the TestClient from FastAPI, which lets us simulate requests to our API in a testing environment.
from fastapi.testclient import TestClient

# Import the FastAPI application instance from our main file.
# This instance (`app`) contains our API routes and middleware.
from main import app

# Create an instance of the TestClient, passing in our FastAPI app.
# This client simulates making HTTP requests to the app without needing to run a real server.
client = TestClient(app)


# Define a test function to verify that the GET endpoint works correctly.
def test_get_items():
    # Send a GET request to the '/shopping_list' endpoint.
    response = client.get("/shopping_list")

    # Assert that the status code returned is 200, which indicates a successful request.
    assert response.status_code == 200


# Define a test function to verify that adding an item via the POST endpoint works as expected.
def test_add_item():
    # Send a POST request to the '/shopping_list' endpoint with a JSON body containing a new item.
    # Note: Ensure that the endpoint in your backend matches this path (if not, update it accordingly).
    response = client.post("/item", json={"name": "Milk"})

    # Assert that the response status code is 200, indicating success.
    assert response.status_code == 200

    # Assert that the response JSON matches the expected output.
    # This confirms that the item was added correctly and returned in the expected format.
    assert response.json() == {"name": "Milk"}
