# Configuration for Environment Variables

import os

# API Keys
API_KEY = os.getenv('API_KEY')
SECRET_KEY = os.getenv('SECRET_KEY')

# Database Configuration
DATABASE_URL = os.getenv('DATABASE_URL')

# Other Settings
DEBUG = os.getenv('DEBUG', 'False') == 'True'  # Default to False if not set
