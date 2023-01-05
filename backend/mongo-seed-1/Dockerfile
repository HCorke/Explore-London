FROM mongo

COPY init.json /init.json
CMD mongoimport \
    --host mongodb \
    --db explore-london \
    --collection londonBoroughs \
    --type json \
    --file /init.json \
    --jsonArray
