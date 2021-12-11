FROM fusuf/whatsasena:latest

RUN git clone https://github.com/MhmdMukarram/RED_ALPHA /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/Amal-ser/html

CMD ["node", "bot.js"]
