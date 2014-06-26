var username;
var serverName;

process.stdout.write("Please enter your username: \n>")
process.stdin.once('data', function(input){
  username = input
  process.stdout.write("Connect to which server?\n>")
  process.stdin.once('data', function(input){
    serverName = input
    process.stdout.write("Connecting...\n")
    process.stdout.write("Welcome to " + serverName + "!\nTo exit, type 'exit'\n")
    process.stdout.write(">")

    process.stdin.on('data', function(input) {
      if(input == "exit"){
        process.stdout.write("Disconnected.")
        process.exit()
      } else {
        process.stdout.write(username + ": " + input + "\n")
        process.stdout.write(">")
      }
    })
  })
})
