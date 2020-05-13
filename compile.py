#!/usr/bin/env python3

import sys
import os
import subprocess

code = sys.argv[1]

command = 'g++'
argv1 = '-o'
argv2 = 'tes1'
argv3 = code

output = subprocess.Popen([command, argv1, argv2, argv3], stdout=subprocess.PIPE)

print(str(output.communicate()))

command2 = './tes1'

output1 = subprocess.call(command2)
print(output1)
