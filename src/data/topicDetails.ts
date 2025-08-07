import { FunctionSquare as Functions, Calculator, PieChart } from "lucide-react";

const topicDetails = {
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
  "Internet-of-Things": {
    title: "Internet of Things",
    category: "Technology",
    description: "Understand the concept of IoT, how devices communicate, and its real-world applications.",
    icon: Functions,
    content: "The Internet of Things (IoT) refers to a network of interconnected physical devices that can collect and exchange data using embedded sensors and software. Examples include smart homes, wearable devices, and industrial automation systems. IoT enables better monitoring, data-driven decision-making, and automation across industries.",
    subtopics: [
      {
        key: "practical-1",
        practical: "Practical 3",
        title: "Displaying Time on 7-Segment",
        description: "Learn how to display time using a 4-digit 7-segment display and Raspberry Pi.",
        table: [
            
            ["S.No", "Rsp Pi GPIO number", "Rsp Pi PIN number", "7-Segment name"],
            ["1", "GPIO 26", "PIN 37", "Segment a"],
            ["2", "GPIO 19", "PIN 35", "Segment b"],
            ["3", "GPIO 13", "PIN 33", "Segment c"],
            ["4", "GPIO 6",  "PIN 31", "Segment d"],
            ["5", "GPIO 5",  "PIN 29", "Segment e"],
            ["6", "GPIO 11", "PIN 23", "Segment f"],
            ["7", "GPIO 9",  "PIN 21", "Segment g"],
            ["8", "GPIO 10", "PIN 19", "Segment DP"],
            ["9", "GPIO 7",  "PIN 26", "Digit 1"],
            ["10", "GPIO 8", "PIN 24", "Digit 2"],
            ["11", "GPIO 25", "PIN 22", "Digit 3"],
            ["12", "GPIO 24", "PIN 18", "Digit 4"]            
            
          ],
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
        key: "practical-2",
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
        key: "practical-3",
        title: "7 segment display",
        description: "Display it on the 7-segment display.",
        code: `import RPi.GPIO as GPIO
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
        key: "practical-4",
        title: "Controlling LEDs",
        description: "Control multiple LEDs using Raspberry Pi GPIO pins.",
        table: [
            
          
            ["S.No", "Rsp Pi GPIO number", "Rsp Pi PIN number", "board name"],
            ["1", "GPIO 2",  "PIN 3",  "D0"],
            ["2", "GPIO 3",  "PIN 5",  "D1"],
            ["3", "GPIO 4",  "PIN 7",  "D2"],
            ["4", "GPIO 17", "PIN 11", "D3"],
            ["5", "GPIO 27", "PIN 13", "D4"],
            ["6", "GPIO 22", "PIN 15", "D5"],
            ["7", "GPIO 10", "PIN 19", "D6"],
            ["8", "GPIO 9",  "PIN 21", "D7"]
      
                 
          
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
      }
    ]
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