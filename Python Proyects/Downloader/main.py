# Import the libraries from Python 3.11 and set a short name for use in the apps 
import customtkinter as ctk
from tkinter import ttk
from pytube import YouTube
import os

def dowload_video():
    # Get the links for user
    url = url_entry.get()
    resolutions = resolution_var.get()

    status_label.pack(pady=(2, 0))
    advice_label.pack(pady=(2, 0))
    progress_label.pack(pady=(2, 0))
    progress_bar.pack(pady=(2, 0))

    try:
        # Set connection with youtube with get a video link
        yt = YouTube(url, on_progress_callback=on_progress)
        stream = yt.streams.filter(res = resolutions).first()

        # Download in especific directory
        os.path.join('Downloads', f'{yt.title}.mp4')
        stream.download(output_path='Downloads')

        # Download Status
        status_label.configure(text='Descargado exitosamente!', fg_color='green')

    except Exception as e:
        status_label.configure(text=f'Error en la descarga {str(e)}')


def on_progress(stream, chunk, bytes_remaining):
    total_size = stream.filesize
    bytes_downloaded = total_size - bytes_remaining
    percetage_completed = bytes_downloaded / total_size * 100

    # Print the progress in numbers
    progress_label.configure(text= str(int(percetage_completed)) + '%')
    progress_label.update()

    # Show the progress bar about progress
    progress_bar.set(float(percetage_completed / 100))

# Create the window
root = ctk.CTk()
ctk.set_appearance_mode('System')
ctk.set_default_color_theme('blue')

# Set the app title
root.title('ESCALIA - Youtube Downloader')

# Set size from window
root.geometry('720x480')
root.minsize(480, 360)
root.maxsize(1366, 820)

# Create a frame to show the content
content_frame = ctk.CTkFrame(root)
content_frame.pack(fill=ctk.BOTH, expand=True,)  # For fill the window

# Create a labels and entries
url_label = ctk.CTkLabel(content_frame, text='Inserta el link del video: ')
url_entry = ctk.CTkEntry(content_frame, width=400, height=35)
download_button =ctk.CTkButton(content_frame, text='Descargar', command=dowload_video)

# Question a user for resolution video in combo box
resolutions = ['1080p', '720p', '480p', '360p', '240p']
resolution_var = ctk.StringVar()
resolution_combobox = ttk.Combobox(content_frame, values=resolutions, textvariable=resolution_var)
resolution_combobox.set('360p')

# Create a label and progress bar to download progress
advice_label = ctk.CTkLabel(content_frame, text='Descargando')
progress_label = ctk.CTkLabel(content_frame, text='0%')
progress_bar = ctk.CTkProgressBar(content_frame, width=400)
progress_bar.set(0.5)

# Says when the download is sucessfull
status_label = ctk.CTkLabel(content_frame, text='Descargado exitosamente')

# Put on the frame
url_label.pack(pady=(30, 0))
url_entry.pack(pady=(2, 0))
download_button.pack(pady=(10, 0))
resolution_combobox.pack(pady=(10, 0))

# Start the app
root.mainloop()