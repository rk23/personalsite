echo "Building website"
jekyll build
echo "Deploying website to s3"
s3_website push