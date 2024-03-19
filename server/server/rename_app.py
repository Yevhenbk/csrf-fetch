import os

OLD_APP_NAME = 'pharmchat'
NEW_APP_NAME = 'server'

def rename_app():
    # Rename the directory
    os.rename(OLD_APP_NAME, NEW_APP_NAME)

    # Update references in settings.py
    with open('settings.py', 'r') as file:
        data = file.read()
    data = data.replace(OLD_APP_NAME, NEW_APP_NAME)
    with open('settings.py', 'w') as file:
        file.write(data)

    print(f"Successfully renamed '{OLD_APP_NAME}' to '{NEW_APP_NAME}'.")

if __name__ == '__main__':
    rename_app()
