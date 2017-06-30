// On Chrome:
// 0) Open the teams website (login, etc)
// 1) Open the developer console (F12 typically)
// 2) Paste this script in the console at the bottom, press enter
// 3) Close the developer console, scroll up / down a bit until chrome re-renders the screen properly.
text = `
<style>
body {
    line-height: 1.1;
}

.ts-title-bar {
    padding-top: 1rem;
}

.ts-messages-header .ts-tab-bar-wrapper {
    margin-top: 1rem;
}

.app-messages-header {
    padding-left: 1rem;
}

thread .ts-message .conversation-common:not(.conversation-start) .media {
    margin-left: 1rem;
}

.ts-channel-list a {
    height: 2.5rem;
    padding-left: 2rem;
}

.channel-list-team-header {
    height: 3rem;
    padding-left: 1rem;
}

.channel-list-team-header .team-icon {
    height: 2.5rem;
    width: 2.5rem;
}

.ts-message-list-container .ts-message-list-item {
    padding-left: 0.4rem;
}

.message-list-common:not(.chat-style) .fixed-width .message-body-width, .message-list-common:not(.chat-style) .fixed-width .vr-item-placehoders div, .message-list-common:not(.chat-style) .fixed-width .acc-thread-focusable:focus::after {
    width: 100%;
}

.message-list-common:not(.chat-style) .extra-large .message-body-width, .message-list-common:not(.chat-style) .extra-large .vr-item-placehoders div, .message-list-common:not(.chat-style) .extra-large .acc-thread-focusable:focus::after {
    width: 100%;
}

.message-list-common:not(.chat-style) .extra-large .conversation-reply .thread-body:not(.merge-bubble-root) .message-body, .message-list-common:not(.chat-style) .extra-large .conversation-reply .tombstone-body {
    width: 100%;
}

.message-list-common:not(.chat-style) .medium-width .message-body-width, .message-list-common:not(.chat-style) .medium-width .vr-item-placehoders div, .message-list-common:not(.chat-style) .medium-width .acc-thread-focusable:focus::after {
    width: 100%;
}

.message-list-common:not(.chat-style) .fixed-width .conversation-reply .thread-body:not(.merge-bubble-root) .message-body, .message-list-common:not(.chat-style) .fixed-width .conversation-reply .tombstone-body {
    width: 100%;
}

.message-list-common:not(.chat-style) .large-width .message-body-width, .message-list-common:not(.chat-style) .large-width .vr-item-placehoders div, .message-list-common:not(.chat-style) .large-width .acc-thread-focusable:focus::after {
    width: 100%;
}

.message-list-common:not(.chat-style) .extra-large .thread-action-reply-message, .message-list-common:not(.chat-style) .extra-large thread-collapsed {
    width: 100%;
}

.message-list-common:not(.chat-style) .fixed-width .thread-action-reply-message, .message-list-common:not(.chat-style) .fixed-width thread-collapsed {
    width: 100%;
}

.ts-message-list-container {
    max-width: 100%;
}

virtual-repeat>.list-wrap>*.item-wrap {
    max-width: 100%; 
}

.app-svg, .icons-reply {
    width: 0rem;
    height: 0rem;
}

.thread-action-reply-message {
    padding-left: 0;
}

.ts-reply-message .icons-reply.ts-sym span {
    top: -2rem;
}

/*.icons-reply, .acc-thread-focusable {
    display:none;
}
*/

div.ts-message-action-toolbar button {
    height: 1rem;
    width: 1rem;
}

div.ts-reply-message-footer {
    height: 0.1rem;
}

    
.reply-btn-wide .ts-reply-message .icons-reply.ts-sym {
    height: 0;
}

.reply-btn-wide .ts-reply-message .icons-reply.ts-sym button ng-include {
    height: 0;
}

.message-list-divider {
    height: 0px;
}

.message-list-divider-text {
    font-size: 8px;
}

.ts-message-thread-body .message-body {
    padding: 0.1rem;
}

.thread-body>.media-left {
    padding-top: 0;
    padding-bottom: 0;
}

.ts-message .thread-body-status>.ts-skype-status {
    top: 0;
}

thread .ts-message {
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
}

.ts-message-thread-body .padded-content {
    padding-left: 0.2rem;
}

thread .ts-message .conversation-reply .media-left {
    padding-left: 0.2rem;
    padding-top: 0.2rem;
}

thread .ts-message .conversation-reply .media-left {
    width: 4rem;
}


</style>`

$(text).appendTo('head');
