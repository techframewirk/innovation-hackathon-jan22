# Speech to Text Service

This service provides an endpoint (`/voice-to-text`) which takes one audio file with name `*.wav` and converts audio to text.

## Note:
* Python version should 3.7.x or newer.

## Steps to Run
* clone repo
* cd speech-recognition
* python -m venv env
* chmod +x ./env/bin/activate
* ./env/bin/activate
* pip install -r requirements.txt
* python api.py