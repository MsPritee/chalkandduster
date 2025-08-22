import { FunctionSquare as Functions, Calculator, PieChart, BellElectric } from "lucide-react";

const topicDetails = {
    "CSD": {
        title: "Combinational and Sequential Design",
        category: "Technology",
        description: "Digital Electronics and Basic Components",
        icon: BellElectric,
        content: "",
        subtopics: [
            {
                key: "practical-1",
                title: "P1: Study of Basic logic Gates",
                description: "",
                pdfUrl: "https://drive.google.com/file/d/1BrBlrF1d6Js4LZy0WyF3oEYq7Afnxqh3/view?usp=sharing",
                extra: "Instructions for practical 1."
            },
            {
                key: "practical-2",
                title: "P2: De Morgan's laws",
                description: "",
                pdfUrl: "https://drive.google.com/file/d/1G5NK4aiQ8cC-sNueTjnhquqmM6wUsP-L/view?usp=sharing",
                extra: "Instructions for practical 2."
            },
            {
                key: "practical-3",
                title: "P3: De Morgan's laws",
                description: "",
                pdfUrl: "https://drive.google.com/file/d/1ZFMFM_NeeciLXTIn7oZ8dm9tnYCkHJ4b/view?usp=sharing",
                extra: "Instructions for practical 3."
            },
        ]
    },
    "Internet-of-Things": {
        title: "Internet of Things",
        category: "Technology",
        description: "Understand the concept of IoT, how devices communicate, and its real-world applications.",
        icon: Functions,
        content: "The Internet of Things (IoT) refers to a network of interconnected physical devices that can collect and exchange data using embedded sensors and software. Examples include smart homes, wearable devices, and industrial automation systems. IoT enables better monitoring, data-driven decision-making, and automation across industries.",
        subtopics: [
            {
                key: "practical-1",
                title: "P1: Basic Setup",
                description: "Starting Raspbian OS, Familiarising with Raspberry Pi",
                pdfUrl: "https://drive.google.com/file/d/1KcDzZ34v8ODWt2fJcWbT8rdoKsvlAA-U/view?usp=sharing",
                extra: "Instructions for practical 1."
            },
            {
                key: "practical-2",
                title: "P2: Controlling LEDs",
                description: "Control multiple LEDs using Raspberry Pi GPIO pins.",
                pdfUrl: "https://drive.google.com/file/d/16h8s-ztFHstI7llI9z2kxuPLicMUnCj4/view?usp=drive_link",
                table: [


                    ["S.No", "Rsp Pi GPIO number", "Rsp Pi PIN number", "board name"],
                    ["1", "GPIO 2", "PIN 3", "D0 (1)"],
                    ["2", "GPIO 3", "PIN 5", "D1 (2)"],
                    ["3", "GPIO 4", "PIN 7", "D2 (3)"],
                    ["4", "GPIO 17", "PIN 11", "D3 (4)"],
                    ["5", "GPIO 27", "PIN 13", "D4 (5)"],
                    ["6", "GPIO 22", "PIN 15", "D5 (6)"],
                    ["7", "GPIO 10", "PIN 19", "D6 (7)"],
                    ["8", "GPIO 9", "PIN 21", "D7 (8)"],
                    ["9", "GND", "PIN 6", "GND (0)"],


                ],
                code: `import RPi.GPIO as GPIO
import time

# Define GPIO pins connected to D0–D7
led_pins = [2, 3, 4, 17, 27, 22, 10, 9]

GPIO.setmode(GPIO.BCM)

# Setup all pins as output
for pin in led_pins:
    GPIO.setup(pin, GPIO.OUT)
    GPIO.output(pin, GPIO.LOW)

# Basic patterns
def all_on():
    for pin in led_pins:
        GPIO.output(pin, GPIO.HIGH)

def all_off():
    for pin in led_pins:
        GPIO.output(pin, GPIO.LOW)

def blink_all(times=3, delay=0.5):
    for _ in range(times):
        all_on()
        time.sleep(delay)
        all_off()
        time.sleep(delay)

def chasing(delay=0.1):
    for pin in led_pins:
        GPIO.output(pin, GPIO.HIGH)
        time.sleep(delay)
        GPIO.output(pin, GPIO.LOW)

def ping_pong(delay=0.1):
    for pin in led_pins + led_pins[::-1]:
        GPIO.output(pin, GPIO.HIGH)
        time.sleep(delay)
        GPIO.output(pin, GPIO.LOW)

# Run test patterns
try:
    while True:
        blink_all()
        chasing()
        ping_pong()
except KeyboardInterrupt:
    print("Exiting...")
finally:
    all_off()
    GPIO.cleanup()
`,
                extra: "Author: Pritee"
            },

            {
                key: "practical-3",
                // practical: "Practical 3",
                title: "P3: Displaying Time on 7-Segment",
                description: "Learn how to display time using a 4-digit 7-segment display and Raspberry Pi.",
                table: [

                    ["S.No", "Rsp Pi GPIO number", "Rsp Pi PIN number", "7-Segment name"],
                    ["1", "GPIO 26", "PIN 37", "Segment a"],
                    ["2", "GPIO 19", "PIN 35", "Segment b"],
                    ["3", "GPIO 13", "PIN 33", "Segment c"],
                    ["4", "GPIO 6", "PIN 31", "Segment d"],
                    ["5", "GPIO 5", "PIN 29", "Segment e"],
                    ["6", "GPIO 11", "PIN 23", "Segment f"],
                    ["7", "GPIO 9", "PIN 21", "Segment g"],
                    ["8", "GPIO 10", "PIN 19", "Segment DP/DEC"],
                    ["9", "GPIO 7", "PIN 26", "Digit 3 (Leftmost/3)"],
                    ["10", "GPIO 8", "PIN 24", "Digit 2 (2)"],
                    ["11", "GPIO 25", "PIN 22", "Digit 1 (1)"],
                    ["12", "GPIO 24", "PIN 18", "Digit 0 (Rightmost/0)"]

                ],
                pdfUrl: "https://drive.google.com/file/d/1eFCWgNZ61CONvCYLy2x3nxwM4LJDAOsF/view?usp=sharing",
                code: `import RPi.GPIO as GPIO
import time, datetime
now = datetime.datetime.now()
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
 #GPIO ports for the 7seg pins
segment8 =  (26,19,13,6,5,11,9,10)
for segment in segment8:
    GPIO.setup(segment, GPIO.OUT)
    GPIO.output(segment, 0)
    #Digit 1 (Leftmost)
    GPIO.setup(7, GPIO.OUT)
    GPIO.output(7, 0) #Off initially
    #Digit 2 
    GPIO.setup(8, GPIO.OUT)
    GPIO.output(8, 0) #Off initially
    #Digit 3 
    GPIO.setup(25, GPIO.OUT)
    GPIO.output(25, 0) #Off initially
    #Digit 4 (Rightmost)
    GPIO.setup(24, GPIO.OUT)
    GPIO.output(24, 0) #Off initially

null  = [1, 1, 1, 1, 1, 1, 1]
zero  = [0, 0, 0, 0, 0, 0, 1]
one   = [1, 0, 0, 1, 1, 1, 1]
two   = [0, 0, 1, 0, 0, 1, 0]
three = [0, 0, 0, 0, 1, 1, 0]
four  = [1, 0, 0, 1, 1, 0, 0]
five  = [0, 1, 0, 0, 1, 0, 0]
six   = [0, 1, 0, 0, 0, 0, 0]
seven = [0, 0, 0, 1, 1, 1, 1]
eight = [0, 0, 0, 0, 0, 0, 0]
nine  = [0, 0, 0, 0, 1, 0, 0]

def print_segment(charector):
    if charector == 1:
        for i in range(7):
            GPIO.output(segment8[i], one[i])
    if charector == 2:
        for i in range(7):
            GPIO.output(segment8[i], two[i])
    if charector == 3:
        for i in range(7):
            GPIO.output(segment8[i], three[i])
    if charector == 4:
        for i in range(7):
            GPIO.output(segment8[i], four[i])
    if charector == 5:
        for i in range(7):
            GPIO.output(segment8[i], five[i])
    if charector == 6:
        for i in range(7):
            GPIO.output(segment8[i], six[i])
    if charector == 7:
        for i in range(7):
            GPIO.output(segment8[i], seven[i])
    if charector == 8:
        for i in range(7):
            GPIO.output(segment8[i], eight[i])
    if charector == 9:
        for i in range(7):
            GPIO.output(segment8[i], nine[i])
    if charector == 0:
        for i in range(7):
            GPIO.output(segment8[i], zero[i])        
    return;
while 1:
    now = datetime.datetime.now()
    hour = now.hour
    minute = now.minute
    h1 = hour//10
    h2 = hour % 10
    m1 = minute //10
    m2 = minute % 10
    print (h1,h2,m1,m2)
    delay_time = 0.001 #delay to create virtual effect
    GPIO.output(7, 1) #Turn on Digit One
    print_segment (h1) #Print h1 on segment
    time.sleep(delay_time)
    GPIO.output(7, 0) #Turn off Digit One
    GPIO.output(8, 1) #Turn on Digit One
    print_segment (h2) #Print h1 on segment
    GPIO.output(10, 1) #Display point On
    time.sleep(delay_time)
    GPIO.output(10, 0) #Display point Off
    GPIO.output(8, 0) #Turn off Digit One
    GPIO.output(25, 1) #Turn on Digit One
    print_segment (m1) #Print h1 on segment
    time.sleep(delay_time)
    GPIO.output(25, 0) #Turn off Digit One
    GPIO.output(24, 1) #Turn on Digit One
    print_segment (m2) #Print h1 on segment
    time.sleep(delay_time)
    GPIO.output(24, 0) #Turn off Digit One
    #time.sleep(1)`,
                extra: "Author: Pritee"
            },
            {
                key: "practical-4",
                title: "P4: Controll LEDs with WA",
                description: "Control multiple LEDs using WhatsApp.",
                table: [


                    ["S.No", "Rsp Pi GPIO number", "Rsp Pi PIN number", "board name"],
                    ["1", "GPIO 2", "PIN 3", "D0 (1)"],
                    ["2", "GPIO 3", "PIN 5", "D1 (2)"],
                    ["3", "GPIO 4", "PIN 7", "D2 (3)"],
                    ["4", "GPIO 17", "PIN 11", "D3 (4)"],
                    ["5", "GPIO 27", "PIN 13", "D4 (5)"],
                    ["6", "GPIO 22", "PIN 15", "D5 (6)"],
                    ["7", "GPIO 10", "PIN 19", "D6 (7)"],
                    ["8", "GPIO 9", "PIN 21", "D7 (8)"],
                    ["9", "GND", "PIN 6", "GND (0)"],


                ],
                pdfUrl: "https://drive.google.com/file/d/1GfS9x3_FkNnx2wP25zTi1D20-zHdyQiR/view?usp=sharing",
                code: `
from flask import Flask, request
from twilio.twiml.messaging_response import MessagingResponse
import RPi.GPIO as GPIO

# Update with your 8 GPIO pins
LED_PINS = {
    "led1": 2,
    "led2": 3,
    "led3": 4,
    "led4": 17,
    "led5": 27,
    "led6": 22,
    "led7": 10,
    "led8": 9
}

# Setup GPIO
GPIO.setmode(GPIO.BCM)
for pin in LED_PINS.values():
    GPIO.setup(pin, GPIO.OUT)
    GPIO.output(pin, GPIO.LOW)

app = Flask(__name__)

@app.route("/whatsapp", methods=["POST"])
def whatsapp():
    msg = request.form.get('Body').lower().strip()
    response = MessagingResponse()
    
    if "on" in msg or "off" in msg:
        found = False
        for led, pin in LED_PINS.items():
            if led in msg:
                state = GPIO.HIGH if "on" in msg else GPIO.LOW
                GPIO.output(pin, state)
                response.message(f"{led.upper()} turned {'ON' if state else 'OFF'}")
                found = True
                break
        if not found:
            if "all on" in msg:
                for pin in LED_PINS.values():
                    GPIO.output(pin, GPIO.HIGH)
                response.message("All LEDs turned ON")
            elif "all off" in msg:
                for pin in LED_PINS.values():
                    GPIO.output(pin, GPIO.LOW)
                response.message("All LEDs turned OFF")
            else:
                response.message("Invalid LED command.")
    else:
        response.message("Try: led1 on, led3 off, all on, all off")

    return str(response)

@app.route("/") 
def home(): 
    return "Welcome to the LED control app." 

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

`,
                extra: "Author: Pritee"
            },
            {
                key: "practical-5",
                title: "P5:  Fingerprint Sensor interfacing with Raspberry Pi",
                description: "Fingerprint-based IoT Door Lock (LED simulation) ",
                // table: [

                //     ["S.No", "Rsp Pi GPIO number", "Rsp Pi PIN number", "board name"],
                //     ["1", "GPIO 2", "PIN 3", "D0"],
                //     ["2", "GPIO 3", "PIN 5", "D1"],
                //     ["3", "GPIO 4", "PIN 7", "D2"],
                //     ["4", "GPIO 17", "PIN 11", "D3"],
                //     ["5", "GPIO 27", "PIN 13", "D4"],
                //     ["6", "GPIO 22", "PIN 15", "D5"],
                //     ["7", "GPIO 10", "PIN 19", "D6"],
                //     ["8", "GPIO 9", "PIN 21", "D7"],
                //     ["9", "GND", "PIN 6", "GND"],

                // ],
                pdfUrl: "",
                code: `
from pyfingerprint.pyfingerprint import PyFingerprint
import RPi.GPIO as GPIO
import time

# Setup LED
LED_PIN = 17
GPIO.setmode(GPIO.BCM)
GPIO.setup(LED_PIN, GPIO.OUT)
GPIO.output(LED_PIN, GPIO.LOW)

try:
    f = PyFingerprint('/dev/ttyUSB0', 57600, 0xFFFFFFFF, 0x00000000)
    if not f.verifyPassword():
        raise ValueError('Fingerprint sensor password is wrong!')

    print("Fingerprint sensor ready!")
    print("Templates stored: " + str(f.getTemplateCount()))

except Exception as e:
    print("Error: " + str(e))
    exit(1)

try:
    while True:
        print("Place your finger...")
        while not f.readImage():
            pass

        f.convertImage(0x01)
        result = f.searchTemplate()
        positionNumber = result[0]

        if positionNumber == -1:
            print("Access Denied")
            GPIO.output(LED_PIN, GPIO.LOW)
        else:
            print("Access Granted (Template #" + str(positionNumber) + ")")
            GPIO.output(LED_PIN, GPIO.HIGH)
            time.sleep(5)
            GPIO.output(LED_PIN, GPIO.LOW)

except KeyboardInterrupt:
    print("Exiting program...")
    GPIO.cleanup()

                `,
                extra: "Author: Pritee"
            },
            {
                key: "practical-21",
                title: "Enroll Fingerprint",
                description: "Enroll fingerprint using fingerprint sensor..",
                code: `
from pyfingerprint.pyfingerprint import PyFingerprint

try:
    f = PyFingerprint('/dev/serial0', 57600, 0xFFFFFFFF, 0x00000000)
    if ( f.verifyPassword() == False ):
        raise ValueError('The given fingerprint sensor password is wrong!')

except Exception as e:
    print('Failed to initialize fingerprint sensor!')
    print('Exception message: ' + str(e))
    exit(1)

try:
    print('Waiting for finger...')
    while ( f.readImage() == False ):
        pass

    f.convertImage(0x01)

    result = f.searchTemplate()
    positionNumber = result[0]

    if positionNumber >= 0:
        print('Template already exists at position #' + str(positionNumber))
        exit(0)

    print('Remove finger...')
    while ( f.readImage() == True ):
        pass

    print('Waiting for same finger again...')
    while ( f.readImage() == False ):
        pass

    f.convertImage(0x02)

    if ( f.compareCharacteristics() == 0 ):
        raise Exception('Fingers do not match')

    positionNumber = f.storeTemplate()
    print('Finger enrolled successfully at position #' + str(positionNumber))

except Exception as e:
    print('Operation failed!')
    print('Exception message: ' + str(e))
    exit(1)
    
`,
                extra: "Instructions for practical 5."
            },
            {
                key: "practical-22",
                title: "Search Fingerprint",
                description: "Search fingerprint ",
                code: `
from pyfingerprint.pyfingerprint import PyFingerprint

try:
    f = PyFingerprint('/dev/serial0', 57600, 0xFFFFFFFF, 0x00000000)
    if ( f.verifyPassword() == False ):
        raise ValueError('The given fingerprint sensor password is wrong!')

except Exception as e:
    print('Failed to initialize fingerprint sensor!')
    print('Exception message: ' + str(e))
    exit(1)

try:
    print('Waiting for finger...')
    while ( f.readImage() == False ):
        pass

    f.convertImage(0x01)

    result = f.searchTemplate()
    positionNumber = result[0]
    accuracyScore = result[1]

    if ( positionNumber == -1 ):
        print('No match found!')
    else:
        print(f'Found match at position #{positionNumber} with accuracy score {accuracyScore}')

except Exception as e:
    print('Operation failed!')
    print('Exception message: ' + str(e))
    exit(1)

                `,
                extra: "Instructions for practical 5."
            },
            {
                key: "practical-11",
                title: "Check the 7-segment display",
                description: "Check and display numbers on the 7-segment display.",

                code: `import RPi.GPIO as GPIO
import time

# Segment pins: A, B, C, D, E, F, G, DP
segments = [26, 19, 13, 6, 5, 11, 9, 10]

# Digit control pins (common cathode logic):
# D1, D2, D3 (25), D4 (24)
digits = [7, 8, 25, 24]

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

# Setup segment pins
for seg in segments:
    GPIO.setup(seg, GPIO.OUT)
    GPIO.output(seg, 0)

# Setup digit control pins
for dig in digits:
    GPIO.setup(dig, GPIO.OUT)
    GPIO.output(dig, 1)  # HIGH = OFF (for common cathode)

# Test each segment individually
print("Testing segments...")
for i, seg in enumerate(segments):
    GPIO.output(seg, 1)  # Turn ON this segment
    time.sleep(0.5)
    GPIO.output(seg, 0)  # Turn it OFF

# Test each digit with all segments ON (except DP for clarity)
print("Testing digits...")
for digit in digits:
    # Turn on all segments (skip DP)
    for seg in segments[:-1]:
        GPIO.output(seg, 1)

    GPIO.output(digit, 0)  # Turn ON this digit
    time.sleep(0.5)
    GPIO.output(digit, 1)  # Turn it OFF

    # Turn off segments
    for seg in segments:
        GPIO.output(seg, 0)

GPIO.cleanup()
print("Test completed.")
`,
                extra: "Instructions for practical 3."
            },
            {
                key: "practical-12",
                title: "7 segment display",
                description: "Display it on the 7-segment display.",
                code: `
import RPi.GPIO as GPIO
import time
from datetime import datetime

# Segment pins (A B C D E F G DP)
segments = [26, 19, 13, 6, 5, 11, 9, 10]

# Digit control pins (D1, D2, D3, D4)
digits = [7, 8, 25, 24]

# Segment map: 0 = ON, 1 = OFF (common anode)
digit_map = {
    '0': [0,0,0,0,0,0,1,1],
    '1': [1,0,0,1,1,1,1,1],
    '2': [0,0,1,0,0,1,0,1],
    '3': [0,0,0,0,1,1,0,1],
    '4': [1,0,0,1,1,0,0,1],
    '5': [0,1,0,0,1,0,0,1],
    '6': [0,1,0,0,0,0,0,1],
    '7': [0,0,0,1,1,1,1,1],
    '8': [0,0,0,0,0,0,0,1],
    '9': [0,0,0,0,1,0,0,1],
    ' ': [1,1,1,1,1,1,1,1]
}

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

# Setup all GPIOs
for seg in segments:
    GPIO.setup(seg, GPIO.OUT)
    GPIO.output(seg, 1)  # OFF (common anode)

for dig in digits:
    GPIO.setup(dig, GPIO.OUT)
    GPIO.output(dig, 1)  # OFF

def display_digits(value, show_colon=False):
    for i in range(4):
        seg_values = digit_map.get(value[i], digit_map[' ']).copy()
        if show_colon and i == 1:
            seg_values[7] = 0  # DP ON
        else:
            seg_values[7] = 1  # DP OFF

        # Set segments
        for j in range(8):
            GPIO.output(segments[j], seg_values[j])

        # Turn on current digit
        GPIO.output(digits[i], 0)
        time.sleep(0.003)
        GPIO.output(digits[i], 1)

        # Turn off segments (optional: prevents ghosting)
        for j in range(8):
            GPIO.output(segments[j], 1)

def loop_display_time():
    try:
        while True:
            now = datetime.now()
            current_time = now.strftime("%H%M")  # or "%M%S"
            blink = (now.second % 2 == 0)

            for _ in range(50):
                display_digits(current_time, show_colon=blink)

    except KeyboardInterrupt:
        GPIO.cleanup()
        print("\nStopped and cleaned up GPIO.")

loop_display_time()
`,
                extra: "Instructions for practical 3."
            },




            {
                key: "practical-13",
                title: "Blink LEDs using WA msg",
                description: "Control multiple LEDs using Raspberry Pi GPIO pins.",
                table: [

                    ["S.No", "Rsp Pi GPIO number", "Rsp Pi PIN number", "board name"],
                    ["1", "GPIO 2", "PIN 3", "D0"],
                    ["2", "GPIO 3", "PIN 5", "D1"],
                    ["3", "GPIO 4", "PIN 7", "D2"],
                    ["4", "GPIO 17", "PIN 11", "D3"],
                    ["5", "GPIO 27", "PIN 13", "D4"],
                    ["6", "GPIO 22", "PIN 15", "D5"],
                    ["7", "GPIO 10", "PIN 19", "D6"],
                    ["8", "GPIO 9", "PIN 21", "D7"],
                    ["9", "GND", "PIN 6", "GND"],

                ],
                code: `
from flask import Flask, request
from twilio.twiml.messaging_response import MessagingResponse
import RPi.GPIO as GPIO
import threading
import time

# Define GPIO pins for each LED
LED_PINS = {
    "led1": 2,
    "led2": 3,
    "led3": 4,
    "led4": 17,
    "led5": 27,
    "led6": 22,
    "led7": 10,
    "led8": 9
}

# Setup GPIO
GPIO.setmode(GPIO.BCM)
for pin in LED_PINS.values():
    GPIO.setup(pin, GPIO.OUT)
    GPIO.output(pin, GPIO.LOW)

# Dictionary to keep track of blinking threads
blinking_threads = {}

# Function to blink an LED
def blink_led(pin, stop_event, interval=0.5):
    while not stop_event.is_set():
        GPIO.output(pin, GPIO.HIGH)
        time.sleep(interval)
        GPIO.output(pin, GPIO.LOW)
        time.sleep(interval)

app = Flask(__name__)

@app.route("/whatsapp", methods=["POST"])
def whatsapp():
    msg = request.form.get('Body').lower().strip()
    response = MessagingResponse()
    
    # Handle ON/OFF commands
    if "on" in msg or "off" in msg:
        for led, pin in LED_PINS.items():
            if led in msg:
                # If LED was blinking, stop it before setting state
                if led in blinking_threads:
                    blinking_threads[led]['stop'].set()
                    blinking_threads[led]['thread'].join()
                    del blinking_threads[led]

                state = GPIO.HIGH if "on" in msg else GPIO.LOW
                GPIO.output(pin, state)
                response.message(f"{led.upper()} turned {'ON' if state else 'OFF'}")
                break
        else:
            if "all on" in msg:
                for led, pin in LED_PINS.items():
                    if led in blinking_threads:
                        blinking_threads[led]['stop'].set()
                        blinking_threads[led]['thread'].join()
                        del blinking_threads[led]
                    GPIO.output(pin, GPIO.HIGH)
                response.message("All LEDs turned ON")
            elif "all off" in msg:
                for led, pin in LED_PINS.items():
                    if led in blinking_threads:
                        blinking_threads[led]['stop'].set()
                        blinking_threads[led]['thread'].join()
                        del blinking_threads[led]
                    GPIO.output(pin, GPIO.LOW)
                response.message("All LEDs turned OFF")
            else:
                response.message("Invalid LED command.")

    # Handle BLINK command
    elif "blink" in msg:
        for led, pin in LED_PINS.items():
            if led in msg:
                # If already blinking, restart
                if led in blinking_threads:
                    blinking_threads[led]['stop'].set()
                    blinking_threads[led]['thread'].join()

                stop_event = threading.Event()
                t = threading.Thread(target=blink_led, args=(pin, stop_event))
                t.start()
                blinking_threads[led] = {'thread': t, 'stop': stop_event}
                response.message(f"{led.upper()} is now blinking")
                break
        else:
            response.message("Invalid blink command. Try led3 blink")

    else:
        response.message("Send: led1 on, led2 off, all on, led3 blink, etc.")

    return str(response)

@app.route("/") 
def home: 
    return "Welcome to the LED control app." 


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

`,
                extra: "Author: Pritee"
            },


        ]
    },
    "linear-equations": {
        title: "Linear Equations",
        category: "Algebra",
        description: "Learn how to solve linear equations and apply them to real-world problems.",
        icon: Functions,
        content: "Linear equations are equations of the form Ax + B = 0..."
    },
    "quadratic-functions": {
        title: "Quadratic Functions",
        category: "Algebra",
        description: "Understand quadratic equations, their graphs, and solutions.",
        icon: Functions,
        content: "A quadratic function is a function that can be described by an equation of the form ax^2 + bx + c = 0..."
    },
    "polynomials": {
        title: "Polynomials",
        category: "Algebra",
        description: "Explore polynomial functions, their properties, and factorization techniques.",
        icon: Calculator,
        content: "A polynomial is a mathematical expression consisting of variables and coefficients..."
    },
    "limits": {
        title: "Limits",
        category: "Calculus",
        description: "Grasp the concept of limits in calculus and their applications.",
        icon: Functions,
        content: "Limits describe the behavior of a function as it approaches a certain value..."
    },
    "derivatives": {
        title: "Derivatives",
        category: "Calculus",
        description: "Master differentiation and its applications in calculus.",
        icon: Calculator,
        content: "The derivative measures how a function changes as its input changes..."
    },
    "integrals": {
        title: "Integrals",
        category: "Calculus",
        description: "Learn about integrals and their significance in calculus.",
        icon: Functions,
        content: "An integral represents the area under a curve and is a key concept in calculus..."
    },
    "probability": {
        title: "Probability",
        category: "Statistics",
        description: "Study probability theories and their real-world applications.",
        icon: PieChart,
        content: "Probability is the measure of the likelihood of an event occurring..."
    },
    "data-analysis": {
        title: "Data Analysis",
        category: "Statistics",
        description: "Understand data analysis techniques and statistical methods.",
        icon: PieChart,
        content: "Data analysis involves inspecting, cleaning, transforming, and modeling data..."
    },
    "regression": {
        title: "Regression",
        category: "Statistics",
        description: "Learn about regression models and their role in statistics.",
        icon: Calculator,
        content: "Regression analysis helps predict the relationship between variables..."
    },

    "Artificial-Intelligence": {
        title: "Artificial Intelligence",
        category: "Technology",
        description: "Learn about AI, machine learning, and deep learning, and their applications.",
        icon: Functions,
        content: "Artificial Intelligence (AI) refers to the ability of machines to perform tasks that typically require human intelligence, such as visual perception, speech recognition, decision-making, and language understanding. Machine learning and deep learning are subfields of AI that focus on building models that can learn from data and make predictions or decisions."
    }
};

export default topicDetails;