import threading
import time

def background_task():
    while True:
        print("Daemon thread running...")
        time.sleep(1)

t = threading.Thread(target=background_task)
t.daemon = True    # Mark as daemon thread
t.start()

print("Main thread finished!")
