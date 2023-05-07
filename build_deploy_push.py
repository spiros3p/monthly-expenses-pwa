import os

x = input('Commit message: ')

os.system('npm run build:ionic')
os.system('cp -R build docs')
os.system('git add .')
os.system(f'git commit -m "{x}"')
os.system('git push')
