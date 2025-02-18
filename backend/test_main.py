from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


def test_get_items():
    response = client.get("/shopping_list")
    assert response.status_code == 200


def test_add_item():
    response = client.post("/shopping_list", json={"name": "Milk"})
    assert response.status_code == 200
    assert response.json() == {"name": "Milk"}
