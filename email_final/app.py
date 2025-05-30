import nltk
nltk.download('stopwords')
nltk.download('punkt')
import nltk
import os

nltk.data.path.append(os.path.expanduser('~/nltk_data'))
nltk.download('punkt', quiet=True)

import re
import string
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.sequence import pad_sequences
import pickle
from fastapi import FastAPI
from pydantic import BaseModel

# Load the saved model and tokenizer
model = load_model('/Users/danishsheikh/Desktop/email spam/email_final/spam_model.h5')  # Relative path (adjust if needed)
with open('/Users/danishsheikh/Desktop/email spam/email_final/tokenizer.pickle', 'rb') as handle:
    tokenizer = pickle.load(handle)

max_len = 150  # Must match the max_len used during training
stop_words = set(stopwords.words('english'))

# Cleaning function
def clean_text(text):
    text = text.lower()
    text = re.sub(r'http\S+|www\.\S+', '', text)
    text = re.sub(r'<.*?>', '', text)
    text = re.sub(f'[{re.escape(string.punctuation)}]', '', text)
    text = re.sub(r'\d+', '', text)
    return text

# Remove stopwords
def remove_stopwords(text):
    words = word_tokenize(text)
    return ' '.join(word for word in words if word not in stop_words)

# Predict function
def predict_spam(text):
    text = clean_text(text)
    text = remove_stopwords(text)
    sequence = tokenizer.texts_to_sequences([text])
    sequence = pad_sequences(sequence, maxlen=max_len)
    prediction = model.predict(sequence)[0][0]
    return "Spam" if prediction > 0.5 else "Not Spam"

# Initialize FastAPI app
app = FastAPI()

class TextInput(BaseModel):
    text: str

# Define the prediction endpoint
@app.post("/predict")
def predict(input: TextInput):
    prediction = predict_spam(input.text)
    return {"prediction": prediction}

# Run the server
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)
