FROM mongo

COPY init.json /init.json
CMD mongoimport \
    --host mongodb \
    --db explore-london \
    --collection londonAreasList \
    --type json \
    --file /init.json \
    --jsonArray
