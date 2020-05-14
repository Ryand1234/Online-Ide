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

    output = subprocess.Popen([command, argv1, argv2, argv3], stdout=subprocess.PIPE)

    print(str(output.communicate()))

    command2 = './tes1'

    output1 = subprocess.call(command2)
    print(output1)
elif lang == 'py':
    command = 'python3'
    argv = code

    output = subprocess.Popen([command, argv], stdout=subprocess.PIPE);
    print(str(output.communicate()))
elif lang == 'c':
    command = 'gcc'
    argv1 = '-o'
    argv2 = 'tes1'
    argv3 = code

    output = subprocess.Popen([command, argv1, argv2, argv3], stdout=subprocess.PIPE)

    print(str(output.communicate()))

    command2 = './tes1'

    output1 = subprocess.call(command2)
    print(output1)
else:
    command = 'ruby'
    argv = code

    output = subprocess.Popen([command, argv], stdout=subprocess.PIPE);
    print(str(output.communicate()))
