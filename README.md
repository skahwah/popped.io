# Description
This branch contains the source code for my [website](https://popped.io). 

I've added my environment setup notes and some commands to run whenever I need to come back to the website and update content.

# Environment Setup
```
sudo apt update && sudo apt-upgrade -y
sudo apt install libpng-dev pngquant autoconf libtool pkg-config -y
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
git clone https://github.com/skahwah/popped.io.git
cd popped.io
git checkout new-website-source-files
nvm install v16.20.2
npm install -g gatsby-cli
npm install -g yarn
yarn
npm start
```

# Adding New Content
```
npm run deploy
git add * && git commit -m "Updating Content" && git push origin main
```
