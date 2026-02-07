import WriteupLayout from "./components/writeup";

export default function MoodRun() {
  return (
    <WriteupLayout
      title="Cloud Run Spotify Mood App"
      subtitle="Deploying a containerized Flask app with OAuth, Datastore, and Spotify's API"
      image="/portfolio/assets/articles/12-13-24(Spotify-Mood-App)/thumb.jpg"
      imageAlt="Spotify Mood App thumbnail"
    >
      <p>
        This project explores deploying a containerized Flask application
        to Google Cloud Run while integrating Spotify OAuth and Datastore.
      </p>

      <p>
        The app authenticates users with Spotify, analyzes listening habits,
        and recommends music based on mood input.
      </p>
    </WriteupLayout>
  );
}