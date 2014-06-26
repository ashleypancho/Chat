//
//  main.cpp
//  chat
//
//  Created by Ashley on 6/25/14.
//
//

#include <iostream>
using namespace std;

int main(int argc, const char * argv[])
{
    string username;
    string servName;
    string input;
    
    // insert code here...
    cout << "Please enter your username: \n>";
    cin >> username;
    cout << "Connect to which server?\n>";
    cin >> servName;
    cout << "Connecting...\n";
    cout << "Welcome to " << servName << "!\nTo exit, enter 99999\n";
    while (input != "99999") {
        cin >> input;
        cout << input << " ";
        cout << endl;
    }
    cout << "Disconnected\n";
    
    return 0;
}
