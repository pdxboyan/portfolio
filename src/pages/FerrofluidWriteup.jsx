import WriteupLayout from "./components/writeupTemplate";

export default function FerrofluidWriteup() {
    return (
        <WriteupLayout
            title="Ferrofluid Sound Visualizer"
            date="12/11/24"
            image="./articleAssets/FerrofluidVisualizer/banner.jpg"
            imageAlt="A top down view of the circuit - microcontroller, battery pack, electromagnet, ferrofluid."
        >
            
            <h2 className="font-title text-3xl">Planning Phase</h2>

            <p className="font-text text-xl">
                The idea for this project came from seeing a ferrofluid speaker online. I thought the idea was really cool, and I 
                thought creating my own spin on the project seemed fitting for this class. I set out to create a music visualizer
                using ferrofluid that would be controlled by an electromagnet to bounce to the beat of an input, sound, or music. 
                I started by researching what components I might need by bouncing ideas off of chatGPT and looking at various forums 
                online. The grocery list ended up being... 
            </p>

            <ul className="ml-4 font-text text-l">
                <li>• Raspberry Pi Pico W</li>
                <li>• Electromagnets</li>
                <li>• Ferrofluid Liquid Display</li>
                <li>• IRLZ44n MOSFET Transistor</li>
                <li>• MAX4466 Electret Microphone</li>
                <li>• 1N4007 Rectifier Diode</li>
                <li>• 60 Values 1/4W (0.25 watt) Metal Film Fixed Resistor Kit</li>
                <li>• 3 AA Battery Holder x2</li>
                <li>• Mini breadboards (w/ jumper wires)</li>
            </ul>
    
            <p className="font-text text-xl">I'll leave a list of the rest of the things I used to complete this project below for robustness.
            </p>
            
            <ul className="ml-4 font-text text-l">
                <li>Weller WLC100 40W Soldering Station</li>
                <li>MicroPython</li>
                <li>Visual Studio IDE</li>
                <li>Thonny IDE</li>
                <li>6 AA Batteries</li>
            </ul>
    
            <p className="font-text text-xl">I began by breaking down the project into a flow diagram so that I could focus on one step at a time.  
            </p>
    
            <p className="font-text text-xl">{'Microphone  —>  Analog to Digital  —>  FFT (w/ lowpass)  —>  Trigger Transistor  —>  Pulse!'}</p>
    
            <p className="font-text text-xl">
                From this view, I decided to split the project up into two main components. I would first focus on creating 
                the circuit without the Pico, before attaching the microphone and programming the Pico. Once both components worked
                seperately I would combine them for the final product. 
            </p>
    
            <h2 className="font-title text-3xl">Circuit Design</h2>
    
            <p className="font-text text-xl">
                This is the design I came up with for the inital circuit as a wiring diagram.
                <a href="https://www.youtube.com/watch?v=IG5vw6P9iY4" target="_blank" className="text-blue-500"> this</a> video while designing it.
                From a high level his circuit was doing a similar enough function that I could cross reference between my design
                and his to double check my work. His uses a different style of transistor (P type instead of N) and powers a lightbulb
                (effectively a big resistor). 
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <img src="./articleAssets/FerrofluidVisualizer/2.jpg" alt="Top down view of the actual circuit."></img>
                <img src="./articleAssets/FerrofluidVisualizer/1.jpg" alt="Initial wiring diagram for the electromagnet control circuit."></img>
                <img src="./articleAssets/FerrofluidVisualizer/3.jpg" alt="Close up view of the breadboard."></img>
            </div>

            <p className="font-text text-xl">
                I had to solder on leads for the breadboard onto the electromagnet and the wires coming from the battery pack. The first
                picture shows a view of the whole circuit, with the magnet and battery pack, while the closer up view shows how everything
                is connected. Reference the wiring diagram if it looks too messy.
            </p>

            <p className="font-text text-xl">
                The positive terminal of the batter pack is connected directly to the electromagnet. As you might have noticed, I ommitted the resistor 
                between the positive terminal of the battery pack and the electromagnet in the actual wiring of the circuit on the breadboard. When I was 
                testing the circuit initially, I started with a high value resistor and kept incrementally decreasing it until I removed it entirely — 
                the resistors were weakening the effect of the electromagnet too much for my liking, and the magnet did not heat up too much without them.
            </p>

            <p className="font-text text-xl">
                Directly after the electromagnet there is a diode that feeds some of the current back into the beginning of the electromagnet. This is to 
                prevent back EMF (such as when the magnet has a lot of current flowing through it and the GPIO pin on the Pico is suddenly turned off, 
                potentially creating a big voltage spike that could damage the microcontroller). This side of the electromagnet is also connected to the
                drain pin on the transistor.
            </p>

            <p className="font-text text-xl">
                The control wire is connected to the gate pin of the transistor. When I want to turn the electromagnet on, I connect the other end of the
                wire to the positive lead of the battery, and when I want the magnet off, I remove this end of the control wire from the breadboard. This 
                will later be replaced by the Pico because it can not only do it to the beat of the music, but much faster than I can. There is also a 
                resistor connected here that is connected to ground. This is to make sure that the voltage is actually zero when the GPIO pin is in a low 
                state. Since the transistor is sensitive, ommitting this resistor could result in the electromagnet being switched on, even when the pin is in 
                a low state.
            </p>

            <p className="font-text text-xl">
                Lastly there is a wire connecting the drain pin transistor to the other end of the electromagnet. Below is a diagram of the transistor and 
                it's different pin locations.
            </p>

            <div className="flex flex-col items-center pb-8">
                <img src="./articleAssets/FerrofluidVisualizer/4.jpg" alt="Diagram of the transistor used, labeling the different pins."></img>
            </div>

            
            <h2 className="font-title text-3xl">Programming Pico</h2>

            <p className="font-text text-xl">
                Before I could program the pico, I had to solder leads to the correct pins on the pico, as well as the pins on the microphone.
                I started with the microphone, attaching a red wire to it's VCC pin, a black one for to the GND pin, and an orange one to the OUT pin. 
                I connected the VCC of the microphone to the 3v3 pin on the Pico (supplies a steady 3.3v and this particular microphone can operate in 
                a volatge range of 2.4v - 5.5v). The GND pin was connected to another GND pin on the Pico. The OUT pin from the mic was connected to the
                pico's GP26_A0 pin which can accept analog inputs. Photos of the process in various stages are shown below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 md:gap-2">
                <img src="./articleAssets/FerrofluidVisualizer/5.jpg" alt="The first connection soldered on the microphone."></img>
                <img src="./articleAssets/FerrofluidVisualizer/6.jpg" alt="The first connections soldered onto Pico."></img>
                <img src="./articleAssets/FerrofluidVisualizer/7.jpg" alt="All connections on Pico complete."></img>
                <img src="./articleAssets/FerrofluidVisualizer/8.jpg" alt="The final product, the microphone connected to Pico with soldered jumper wires."></img>
            </div>

            <p className="font-text text-xl">
                I downloaded Thonny (an IDE that works specifically with MicroPython and microcontrollers). I wrote a basic script to take input from the 
                mic and save it to a wav file, however all I ever recorded with the mic was noise. The mic actually has a potentiometer on the back of it to control its gain,
                unfortunately turning it down just turned the nosie down and didn't help me record actual sounds. Below is the first test script as well as one of 
                the wav files recording with the mic produced. I heavily referenced the quickstart guide for the Pico W as well as the documentation for 
                MicroPython both found
                <a href="https://projects.raspberrypi.org/en/projects/get-started-pico-w/1" target="_blank" className="text-blue-500"> here </a>
                and
                <a href="https://docs.micropython.org/en/latest/rp2/quickref.html" target="_blank" className="text-blue-500"> here </a>
                respectively. I also used chatGPT to help me create the wav file headers using the ustruct library.
            </p>
            
            <pre className="mt-8 mb-8 p-4 bg-orange-300 rounded-lg overflow-x-auto">
                <code>
                    {`
test.py
_____________________________________________________


import machine
import time
import ustruct

# Configuration
adc = machine.ADC(26)  # Microphone connected to ADC pin 26 (GP26_A0)
sampling_rate = 8000
duration = 5  # (seconds)
num_samples = sampling_rate * duration
file_name = "audio.wav"

# WAV file header creation
# I used chatGPT to help me write this part
def create_wav_header(sample_rate, bits_per_sample, channels, num_samples):
    byte_rate = sample_rate * channels * bits_per_sample // 8
    block_align = channels * bits_per_sample // 8
    data_chunk_size = num_samples * channels * bits_per_sample // 8
    file_size = 36 + data_chunk_size

    header = b'RIFF' + ustruct.pack(<I>, file_size) + b'WAVE'
    header += b'fmt ' + ustruct.pack(<IHHIIHH>, 16, 1, channels, sample_rate, byte_rate, block_align, bits_per_sample)
    header += b'data' + ustruct.pack(<I>, data_chunk_size)
    return header

# Record audio
def record_audio():
    with open(file_name, "wb") as f:
        # Write WAV header
        header = create_wav_header(sampling_rate, 16, 1, num_samples)
        f.write(header)

        # Capture ADC samples
        print("Recording...")
        for _ in range(num_samples):
            sample = adc.read_u16()  # Reads the 16-bit ADC value
            f.write(ustruct.pack(<H>, sample))  # Writes the value as an unsigned 16-bit PCM
            time.sleep_us(1000000 // sampling_rate) # To maintain the sample rate

        print("Recording complete.")

record_audio()

                    `}
                </code>
            </pre>

            <h2 className="font-title text-2xl">recording.wav</h2>            
            <p className="font-text text-xl">! WARNING ! Turn your audio down because the noise is loud.</p>

            <audio className="max-w-md mb-4" controls>
                <source src="./articleAssets/FerrofluidVisualizer/audio.wav" type="audio/wav"></source>
                Your browser does not support this audio element.
            </audio>

            <p className="font-text text-xl">
                Since I couldn't get the microphone to give me actual input data, and I knew the Pico W comes with wifi capability, I decided to see if 
                streaming audio over my local wifi network on a simple web server would be a feasible option. Referencing 
                <a href="https://projects.raspberrypi.org/en/projects/get-started-pico-w/2" target="_blank" className="text-blue-500"> this </a>
                article, I managed to connect the Pico to wifi. Once I achieved this, I followed 
                <a href="https://projects.raspberrypi.org/en/projects/get-started-pico-w/3" target="_blank" className="text-blue-500"> this </a>
                article to create an open socket to listen on port 8080. Then I wrote some client side code to interact with the webserver in a very simple
                way using python, just to test the connection. Once I got that up and running, I wrote a more complex script to send an audio file over the 
                HTTP connection. Once Pico successfully recieved the wav file, I began to write the code to process the incoming audio signal.
            </p>

            <p className="font-text text-xl">
                What happened next was a horrible 6 hours of banging my head against a wall. Since the Pico only has 2mb of flash storage on it, my initial 
                thoughts were to run the web server on MicroPython, and incorporate the signal processing in C, calling a pre-compiled library that I build
                to handle this. C would be faster than the MicroPython, and small enough to store in Pico as I could customize the build to only include functions
                that I would use in my code. Heavily referencing chatGPT, I created a C program to handle the incoming signal using the kissFFT library. This 
                is a lightweight FFT library that would have been small enough to store on Pico alongside the other code in my compiled build. I did get the code 
                to partially build using Cmake, however there were never .uf2, .elf, or .bin files in the output. Attempting to finish the build with Ninja resulted 
                in errors. The short of it is this meant I could never flash the software onto Pico. I was devestated. 
            </p>

            <p className="font-text text-xl">
                I started trying to think of another way. I started looking to MicroPython libraries that had FFTs built into them. The most popular of them,
                ulab (which is a MicroPython library which wraps around numpy and scipy) was too big to put on Pico directly. Eventually by some miricle I
                found precompiled versions of it that were small enough that I was able to flash onto Pico. Here began actual progress. While there were 
                several iterations of both the server side (Pico) and client side (my PC) code, and the final versions are shown below.
            </p>

            <p className="font-text text-xl">
                The server attempts to connect to my wifi network, and upon succeeding opens a socket to listen on port 8080 for incoming connections. On
                connection, it opens the wav file (or any audio stream with signed 16  bit PCM data although it expects a wav file), and passes that to the 
                proccess_audio function. This function takes the chunck of audio data passed to it and puts it into an array. Then we make sure that the 
                length of the data is a power of 2 (if it isn't we pad it with zeros until it is). Once this is done, we apply an FFT to the chunk of data. 
                512 samples are processed at a time, as I'm sending the data in 1024 byte chunks. I figured that 10 bins would be sufficient to capture 
                enough information about the bass frequencies of the signal — my end goal was to make the ferrofluid react to the beat of the music. 
                In the end, despite my worries, 10 bins were enough to make the ferrofluid dance! Once the FFT was applied, I calculated the peak energy of
                the bass frequencies in the bins by summing the magnitudes. Then I compared it to the aribtraty BASS_THRESHOLD variable I set at the top 
                of the program. If the energy was lower than the threshold, the GPIO pin would be switched off, turning off the electromagnet. If the energy 
                was higher, the GPIO pin would be switched to a high state, turning on the electromagnet. Here I heavily relied on the course notes (CS416p) 
                as well as past programs from the course to make this work. I also referenced the MicroPython documentation quite a lot here as well as the various 
                libraries' documentations, and light use of chatGPT when I was getting weird errors.
            </p>

            <pre className="mt-8 mb-8 p-4 bg-orange-300 rounded-lg overflow-x-auto">
                <code>
                    {`
main.py (server)
___________________________________________________


import network
import socket
import time
import machine
import struct
import ulab
import math
from machine import Pin
from time import sleep

# This value was decided through qualitative testing
BASS_THRESHOLD = 2200

ssid = 'Sorry you don't get my network name'
password = 'Or the password to it'

gpio_pin = machine.Pin(7, machine.Pin.OUT)

def connect():
    #Connects to WLAN
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    wlan.connect(ssid, password)
    print('Waiting for connection...')
    while wlan.isconnected() == False:
        print('...')
        sleep(1)
    ip = wlan.ifconfig()[0]
    print(f'Connected on {ip}')


# Creates the HTTP server
def start_server():
    pico_ip = '192.168.1.105'
    pico_port = 8080

    # Create a socket and bind to the IP and port
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_socket.bind((pico_ip, pico_port))
    server_socket.listen(1)

    print(f"Server listening on {pico_ip}:{pico_port}")

    while True:
        # Accepts a client connection
        client_socket, addr = server_socket.accept()
        print(f"Client connected from {addr}")

        # Receive the audio data in chunks
        with open("received_audio.wav", "wb") as audio_file:
            while True:
                data = client_socket.recv(1024)  # Receive data in chunks
                if not data:
                    break  # No more data
                data = client_socket.recv(1024)  # Receive data in chunks
                process_audio(data)
        
        client_socket.close()

# Finds the next power of 2 greater than or equal to n
# This makes sure the audio samples are always a power of two
def next_power_of_two(n):
    power = 1
    while power < n:
        power *= 2
    return power

# Process the incoming audio samples
def process_audio(data):
    # Puts the datastream into an array for processing
    # We expect samples are signed 16-bit PCM
    num_samples = len(data) // 2 
    pcm_samples = struct.unpack('<' + 'h' * num_samples, data)
    audio_samples = ulab.numpy.array(pcm_samples)

    desired_length = next_power_of_two(len(audio_samples))
    if len(audio_samples) < desired_length:
        padding = ulab.numpy.zeros(desired_length - len(audio_samples))
        audio_samples = ulab.numpy.concatenate((audio_samples, padding))

    # Applies the FFT to the signal for processing
    fft_result = ulab.numpy.fft.fft(audio_samples)
    bass_frequencies = fft_result[0:10]  

    # Calculates the energy in the bass frequencies (sum of magnitudes)
    bass_energy = ulab.numpy.sqrt(ulab.numpy.sum(ulab.numpy.array([abs(x) for x in bass_frequencies])))
    print("Bass Energy:", bass_energy)

    # Compares the energy to the threshold (value set arbitrarily based on testing)
    # If the energy is higher than the threshold the pin gets set to high and the elctomagnet is turned on
    if bass_energy > BASS_THRESHOLD:
        gpio_pin.on()
    else:
        gpio_pin.off()

try:
    connect()
    start_server()
except KeyboardInterrupt:
    machine.reset()
                         
                    `}
                </code>
            </pre>

            <p className="font-text text-xl">
                The client code establishes a socket connection with Pico, before opening an audio file and streaming it to Pico. (The audio file is a 
                wav file and the path is hardcoded at the beginning of the program.) It sends 1 initial chunk of data from the audio file (1024 bytes) and
                sleeps further exectution for 1 second and 80 milliseconds to help with startup lag (this value was chosen arbitrarily through qualitative testing). 
                It then starts the audio playback using the pygame library, and initializes a variable to keep track of the total bytes sent to Pico. Then, in a loop, I get the current 
                point in the audio playback (down to milliseconds) before converting that to the total number of bytes that were played. This is so that we can 
                sync up the playback of the audio and the streaming to Pico later. We then read and send the next chunk of audio to Pico (if it exists). Now, 
                if the current amount of bytes we've played is greater than the total bytes we've sent to Pico, then we have to skip the difference in the 
                amount of bytes in the streaming! We skip enough chunks to stay in sync, update the total sent to reflect the skipped data, and keep looping 
                until the complete audio file has been streamed to Pico. Once the audio has finished playing, the client closes the socket connection to Pico.
                To create all of this, I referenced the pygame documentation, as well as heavy reliance again on the course notes and past programs from the 
                course, and some light chatGPT usage when I got stuck on weird errors.
            </p>

            <pre className="mt-8 mb-8 p-4 bg-orange-300 rounded-lg overflow-x-auto">
                <code>
                    {`
audio_stream.py (client)
_________________________________________________________


import socket
import time
import pygame

# Server details (Pico's IP address and port)
pico_ip = '192.168.1.105'
pico_port = 8080

# Hard coded audio path
audio_file_path = "./wavs/collectathon.wav"

# Hard coded sample rate
sample_rate = 25000

# Establishes a socket connection with Pico
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client_socket.connect((pico_ip, pico_port))

# Open and play the audio file while streaming
pygame.mixer.init()
with open(audio_file_path, 'rb') as audio_file:
    print(f"Starting to stream and playback {audio_file_path}...")

    # Sends 1 initial chunk to help with startup lag
    chunk_size = 1024
    for _ in range(2):
        chunk = audio_file.read(chunk_size)
        if not chunk:
            break
        client_socket.sendall(chunk)

    # Sleeps for 1 second and  80 milliseconds to let the streaming buffer ahead of the playback
    # This value was found arbitrarily to work the best through qualitative testing
    time.sleep(1.08)

    # Starts audio playback
    pygame.mixer.music.load(audio_file_path)
    pygame.mixer.music.play()

    # Keeps track of the total bytes sent
    total_sent = 0
    prev_time = time.time()

    while True:
        # Gets the current playback position in milliseconds
        current_playback_pos = pygame.mixer.music.get_pos()

        # Converts the current playback from milliseconds to samples
        current_playback_samples = (current_playback_pos / 1000) * sample_rate  
        current_playback_bytes = int(current_playback_samples * 2) 

        # Send the next chunk of data to Pico
        chunk = audio_file.read(chunk_size)

        if not chunk:
            break

        # Send the chunk to Pico
        client_socket.sendall(chunk)

        # If the playback is ahead of the streaming, we can skip some chunks to stay in sync
        if current_playback_bytes > total_sent:
            skip_bytes = current_playback_bytes - total_sent
            skip_chunks = skip_bytes // chunk_size
            for _ in range(skip_chunks):
                audio_file.read(chunk_size)  # Skip enough chunks to stay in sync
                total_sent += chunk_size  # Update total_sent to reflect skipped data

        # Update total bytes sent
        total_sent += len(chunk)

client_socket.close()

                    `}
                </code>
            </pre>

            <p className="font-text text-xl">
                I forgot to note this, but while I was initially going to power Pico through the battery packs, for the final version I ended up opting for usb power instead. 
                I also added a second battery pack in series to up the total voltage output to a total of 6 AA batteries or 9v, putting a greater voltage on the electromagnet, 
                and thus the effect on the ferrofluid, stronger. This may be redundant but I replaced the control wire with the wire connected to Pico's GPIO pin 7. I also 
                connected one of Pico's grounds to the circuit's ground when I added Pico to the circuit.
            </p>

            <p className="font-text text-xl">
                        I wanted to add some final notes here. While this version of the project works functionally, there are many things I'd like to improve on for a true version
                        1 of this project. For starters, I could never get the delay quite right to sync up perfectly to the beat of the music. I think it looks good enough, especially
                        with the chunk skipping, but sometimes you can tell it is lagging. I would make my own ferrofluid display using a glass container (probably a cylinder), silicon 
                        oil for the clear liquid, and ferrofluid suspended in it. I would include more electromagnets dedicated to different frequencies, to pull the ferrofluid around the 
                        container based on maybe the fundemental frequency of whatever is being played (I haven't figured out exactly how I'll do this part but something where it'll get 
                        pulled around the different magnets and look cool). These electromagnets would be controlled by multiple transistors which would be hooked up to different GPIO pins 
                        on Pico. I would either have much bigger batteries or the capability to plug the unit into a wall, maybe both. Speaking of units, I would also like to solder the 
                        components neatly together instead of connecting them on a breadboard, saving space and allowing me to put them in a reasonable sized container to hold everything. 
                        This would make transporting it much much easier in addition to looking nicer. I would also like to actually get that microphone working as an input option, but I 
                        didn't have enough time to messs with that. I'm actually very surprised that the final version for this class ended up using a local web server and not the microphone. 
                        Who would have thought. 
            </p>

            <p className="font-text text-xl">
                Now for the best part. I've linked a short demo of a youtube video featuring the final product below. I've also linked a picture of the final circuit! I hope you 
                like it!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <img src="./articleAssets/FerrofluidVisualizer/9.jpg" alt="Top down view of the finished circuit."></img>
                <iframe
                    src="https://www.youtube.com/embed/AgGWMBGq4w4"
                    title="YouTube video player"
                    className="w-full h-full"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>

        </WriteupLayout>
    );
}

