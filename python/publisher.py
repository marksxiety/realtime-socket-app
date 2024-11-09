import socketio
import random
import time

sio = socketio.Client()
sio.connect('http://localhost:8080')

# Function to generate a random number
# This is for sample data that the publisher emits
def generate_random_number():
    return random.randint(1, 100)

def publish_message(client):
    message = generate_random_number()
    sio.emit(client, message)
    print(f"Published by {client}: {message}")
    time.sleep(random.randint(1, 5))

# List of clients
clients = ['client1', 'client2', 'client3']

while True:
    # Randomly select a client to publish the message
    selected_client = random.choice(clients)
    publish_message(selected_client)
