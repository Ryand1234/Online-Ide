#!/usr/bin/env python3

import sys
import os
import subprocess

code = sys.argv[1]

lang = code.split('.')[1]

if lang == 'cpp':
    command = 'g++'
    argv1 = '-o'
    argv2 = 'tes1'
    argv3 = code
    argv4 = '<'
    argv5 = 'input.txt'

    output = subprocess.Popen([command, argv1, argv2, argv3], stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    res = output.communicate();
    if res[1].decode('utf-8') is not '':
        print(res[1].decode('utf-8'))

        command = 'rm'
        subprocess.Popen([command, argv3, argv5])

        sys.exit(1)

    command2 = './tes1 < input.txt'

    output1 = subprocess.call(command2, shell=True)
    command = 'rm'
    argv = 'tes1'

    subprocess.Popen([command, argv, argv3, argv5])
    print(output1)
elif lang == 'py':
    command = 'python3'
    argv = code
    argv4 = '<'
    argv5 = 'input.txt'

    output = subprocess.Popen([command, argv, argv4, argv5], stdout=subprocess.PIPE, stderr=subprocess.PIPE);
    res = output.communicate()
    if res[1].decode('utf-8') is not '':
        print(res[1].decode('utf-8'))
    else:
        print(res[0].decode('utf-8'))
    
    command = 'rm'
    subprocess.Popen([command, argv, argv5]);

elif lang == 'c':
    command = 'gcc'
    argv1 = '-o'
    argv2 = 'tes1'
    argv3 = code
    argv4 = '<'
    argv5 = 'input.txt'

    output = subprocess.Popen([command, argv1, argv2, argv3], stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    #print("YO: ",output.communicate())
    res = output.communicate();
    if res[1].decode('utf-8') is not '':
        print(res[1].decode('utf-8'))

        command = 'rm'
        subprocess.Popen([command, argv3, argv5])

        sys.exit(1)

    command2 = './tes1 < input.txt'

    output1 = subprocess.call(command2, shell=True)

    command = 'rm'
    argv = 'tes1'

    subprocess.Popen([command, argv, argv3, argv5])
    print(output1)
else:
    command = 'ruby'
    argv = code
    argv4 = '<'
    argv5 = 'input.txt'

    output = subprocess.Popen([command, argv, argv4, argv5], stdout=subprocess.PIPE, stderr=subprocess.PIPE);
    
    res = output.communicate();
    if res[1].decode('utf-8') is not '':
        print(res[1].decode('utf-8'))
        
        command = 'rm'
        argv2 = code
        subprocess.Popen([command, argv, argv5])

        sys.exit(1)
    
    print(res[0].decode('utf-8'))

    command = 'rm'
    subprocess.Popen([command, argv, argv5])

