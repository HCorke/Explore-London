FROM mongo

COPY init.json /init.json
CMD mongoimport \
    --host mongodb \
    --db explore-london \
    --collection londonBoroughsList \
    --type json \
    --file /init.json \
    --jsonArray
