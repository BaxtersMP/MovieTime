# MovieTime App

We're gonna learn some things and make some pretty cool shit. 

## Dependencies
You'll need some package managers.

- `npm`: JS related packages (https://www.npmjs.com/get-npm)
- `pip`: Python related packages (make sure pip is up-to-date with `python -m pip install --upgrade pip`)

## Setup

### For the backend:
From the project root directory run:
```
# install `virtualenv` to setup a virtual environment
pip install virtualenv

# create your virtual environment, `venv`
virtualenv venv

# activate your new virtual environment
.\venv\Scripts\activate

# install the remaining python packages
pip install -r requirements.txt
```

### For the frontend:
From the project root directory run to install webpack globally:
```
npm install -g webpack
```

Use `npm` to install the remaining JS dependencies (listed in `package.json`).

```
npm install
```

## To Run
Open two shells and run each of the following commands:
```
# sets up `watch` for frontend changes
npm run watch
```

```
# starts Flask server (make sure venv is activated)
python .\app\server\server.py
```

Once both are running, visit http://localhost:5000/ in the browser. 