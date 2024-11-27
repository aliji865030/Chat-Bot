# ChatBot Customizer

A React-based application that allows users to customize the appearance and behavior of a chatbot. It provides interactive features to change the chatbot's icon, colors, text styles, and font dynamically, offering a personalized user experience.

## Live Demo

You can check out the live demo of the chatbot customizer at the following link:

[**Live Demo**](https://vercel.com/abbas-alis-projects/chat-bot)

## Table of Contents

1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [Features](#features)
4. [Usage](#usage)

## Introduction

This project is a chatbot UI built using React that provides customization options for the user interface. Users can change the following properties of the chatbot:

- **Bot Icon**: Choose a new icon for the bot.
- **Background Colors**: Modify the chatbot's background color, title background, and message area background.
- **Text Colors**: Change the text colors of both the bot and user.
- **Font**: Select a new font for the chatbot's content.
- **Border Radius**: Adjust the chatbot's border radius.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Context API**: Used for state management to handle global app settings.
- **CSS**: For styling the components and implementing the customizations.
- **React Icons**: For interactive icons like the chat close and send buttons.

## Features

- **Dynamic Customization**: Change the chatbot's appearance (icon, colors, font, etc.) in real-time.
- **Interactive UI**: Use buttons to modify various settings, like text color, background color, and more.
- **User-Friendly Design**: A simple, responsive UI for both users and developers.

## Usage

Once the app is up and running, you'll see the chatbot interface on the screen. You can use the following buttons to change the appearance of the chatbot in real-time:

- **Change Icon**: Switch the bot's icon to a random one.
- **Change Bot Icon Background**: Randomize the background color of the bot icon.
- **Change Border Color**: Modify the border color of the chatbot.
- **Change Border Radius**: Adjust the border radius of the chatbot.
- **Change Title Background**: Randomize the background color of the title bar.
- **Change Bot Text Area Background**: Change the background color of the bot's text area.
- **Change Bot Text Color**: Modify the bot's text color.
- **Change User Text Area Background**: Alter the background color of the user's input area.
- **Change User Text Color**: Modify the text color of the user's input.
- **Change Font**: Switch between different font styles for the chatbot.

### Interaction

1. The **ChatBot** component displays the chat interface, including the bot's icon, title, and chat area.
2. The **Changer** component provides buttons that allow you to customize the chatbot's appearance and behavior.
3. The **StoreContext** component uses the Context API to manage the state globally and allow changes to be reflected across all components.

