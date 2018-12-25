#Init
serverless create --template aws-nodejs --path my-service
# Change into the newly created directory
cd my-service

#Resole Alias
Remove-Item alias:sls

# Test Command.
serverless  invoke local --function create --path test/data.json


#deploy 
sls deploy
sls deploy function -f task-find-config