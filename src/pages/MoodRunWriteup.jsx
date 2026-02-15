import WriteupLayout from "./components/writeupTemplate";

export default function MoodRunWriteup() {
    return (
        <WriteupLayout
            title="Cloud Run Spotify Mood App"
            date="12/13/24"
            image="./articleAssets/MoodRun/banner.jpg"
            imageAlt="A silhouette against the sunset."
        >

        <p className="font-text text-xl">
            For my final project in CS430 (Cloud & Internet Systems) I built a web app which integrates Spotify and OpenAI's APIs to recommend
            the user songs based on their current favorite songs as well as their mood! I then containerized it and deployed it to the cloud 
            using Google's Cloud Run. This allowed me to focus on the application logic / code, while leaving the rest to Cloud Run; scaling, 
            server infrastructure, etc. I also use Google's Datastore to store the top song that gets recommended to every user that visits 
            the page. Let's break down the process it took to build this!
        </p>
        
        <p className="font-text text-xl">
            I began by creating the static assets and templates, the raw HTML that would be populated with information by the web server. Once
            I was happy with the initial look of the app, I started working on the infoModel class which would communicate with Datastore, 
            fetching and storing data as needed. What's funny is that while this was the first real piece of backend code I wrote, I didn't 
            get it working until the very end. After this I created the main file for the application, which included routes for the server 
            to follow to the different pages: index (homepage), the sign page, and the results page. At this point this is what the file 
            structure looked like: 
        </p>
        <pre>
            <code>
                {`
moodRun
│
├── templates
│   ├── index.html
│   ├── sign.html
│   ├── results.html
│   └── layout.html
│
├── static
│   └── style.css
│
├── infoModel
│   ├── __init__.py
│   └── model_datastore.py
│
└── app.py
                `}
            </code>
        </pre>

        <p className="font-text text-xl">
            For the sake of keeping the codebase readable and uncluttered, I abstracted out the methods handling index, sign, and results, 
            into their own respective files. I got initial versions of each of these files working, before setting up the API keys. Both keys 
            (OpenAI & Spotify) were easy to set up and work with as they have nice web interfaces for this purpose. I kept all keys and secrets 
            stored in an env file, only stored locally for security reasons. Initially I only tested contact with APIs using simple queries before
            trying to write the more complicated logic to handle what I had in mind for the app. Once solid, I set up Oauth to authenticate 
            the user to allow them to login to their Spotify account. Once these routes were up and running, I read Spotify's API documentation 
            to access the user's top songs. I then read some more documentation from OpenAI to see how I could generate a prompt, feeding the 
            top songs into it, as well as the user's mood in order to recommend 5 new songs! The inital version of this was actually up and 
            running really fast, but finding the correct album art for the songs kept giving me trouble until the very end.
        </p>

        <p className="font-text text-xl">
            Next, I wanted to test containerizing and deploying the app to the cloud, as I had done all my prior development and testing locally. I 
            wrote a simple Dockerfile to containerize it (see below), and created a service account for the application. This service account only 
            gives the app access as a Datastore User, in other words I limited its access to only what was strictly necessary for security. Next 
            I wrote commands to build and deploy the container to cloud run.
        </p>

        <pre>
            <code>
                {`
Commands
_____________________

gcloud builds submit --tag us-west1-docker.pkg.dev/\${GOOGLE_CLOUD_PROJECT}/final-repo/moodrun

gcloud run deploy moodrun \\
--image us-west1-docker.pkg.dev/\${GOOGLE_CLOUD_PROJECT}/final-repo/moodrun \\
--service-account cs430final@cloud-gankov-boga2.iam.gserviceaccount.com


Dockerfile
_____________________

# Use Google Cloud SDK's container as the base image
FROM google/cloud-sdk

# Specify your e-mail address as the maintainer of the container image
LABEL maintainer="boga2@pdx.edu"

# Copy the contents of the current directory into the container directory /app
COPY . /app

# Set the working directory of the container to /app
WORKDIR /app

# Install necessary packages
RUN apt-get update -y && apt-get install -y python3-pip python3-venv \
    && python3 -m venv /env && /env/bin/pip install --no-cache-dir -r requirements.txt

# Set the PATH to use the virtual environment's Python and pip
ENV PATH="/env/bin:$PATH"

# Set the parameters to the program
CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 app:app
                `}
            </code>
        </pre>

        <p className="font-text text-xl">
            I use a virtual environment to handle libraries, with all of the requirements listed in the requirements.txt file. I use flask & gunicorn as 
            my web server (local and production servers), google-cloud-datastore for the data transfer between Datastore, openai for the language models, 
            spotipy to access the user's top songs, and python-dotenv to grab the variables from my secret .env file.
        </p>

        <p className="font-text text-xl">
            I then worked out some bugs with how the data was being handled, as well as fixed some edge cases I wasn't catching before. 
            I kept polishing the app until I was happy with it, before moving back to Datastore. I realized that my issue was that I was 
            never actually redirecting to the results page, I was rendering it directly from sign.py. This meant the GET method never triggered, 
            which is where I insert the top recommended song into datastore. Once I fixed this and worked out some other structural bugs, everything
            worked! Well, almost. I had to fix the way Spotify was searching for the tracks and grabbing the album art. The method I settled with 
            was to search for a track by track - artist - album. If a track had no album, or if that didn't yield art, I search for just track - artist.
            I take the 5 top results for each search, and try to match the image to the track based on the artist name that I originally got, compared to 
            the artist listed with the album art. This was the method that I found worked best. Finally I made some style changes to make the app look great 
            on both PC and mobile. The final file structure is shown below.
        </p>

        <pre>
            <code>
                {`
moodRun
│
├── templates
│   ├── index.html
│   ├── sign.html
│   ├── results.html
│   └── layout.html
│
├── static
│   ├── style.css
│   ├── missing.png
│   └── spotify.png
│
├── infoModel
│   ├── __init__.py
│   └── model_datastore.py
│
├── app.py
├── index.py
├── sign.py
├── results.py
├── requirements.txt
└── Dockerfile
                `}
            </code>
        </pre>

        <p className="font-text text-xl">If you haven't already gotten a chance to check out the web app for yourself, or you want to look at the source code, I've linked both below, cheers!</p>

        <div className="flex space-x-4">
            <a 
                href="https://moodrun-88764087152.us-west1.run.app/" 
                target="_blank"
                className="border-2 border-white rounded-xl
                           font-text text-2xl p-8
                           transition-all duration-300 ease-out
                           hover:bg-black hover:text-white hover:border-black
                           hover:-translate-y-1 hover:shadow-xl"
            >
                MoodRun App
            </a>
            <a 
                href="https://gitlab.com/boga21/cloud-gankov-boga2/-/tree/main/Final?ref_type=heads" 
                target="_blank"
                className="border-2 border-white rounded-xl
                           font-text text-2xl p-8
                           transition-all duration-300 ease-out
                           hover:bg-black hover:text-white hover:border-black
                           hover:-translate-y-1 hover:shadow-xl"
            >
                Gitlab Repo
            </a>
        </div>

        </WriteupLayout>
    );
}