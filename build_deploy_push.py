import os

x = input('Commit message: ')


try:
    os.system('rm -R docs')
except:
    print("'docs' directory does not exist")

os.system('npm run build:ionic')
os.system('cp -R build docs')
os.system('git add .')
os.system(f'git commit -m "{x}"')
os.system('git push')
