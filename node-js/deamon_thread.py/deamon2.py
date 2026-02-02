import threading
import time

def background_task():
    for i in range(8):
        print("Normal:Background running...")
        time.sleep(2)
#normal thread
t=threading.Thread(target=background_task)#Daemon=false by default
t.daemon = False
t.start()
time.sleep(5)
print("main original ended")