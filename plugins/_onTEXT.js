/**
* @project_name Queen Amdi [WA Multi-device]
* @author BlackAmda <https://github.com/BlackAmda>
* @description A WhatsApp based 3食岬� party application that provide many services with a real-time automated conversational experience
* @link <https://github.com/BlackAmda/QueenAmdi>
* @version 4.0.1
* @file  _onTEXT.js - QueenAmdi on text commands

漏 2022 Black Amda, ANTECH. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const { AMDI, amdiChat } = require('queen_amdi_core/dist/scripts')
const { semiAIchat } = amdiChat

AMDI({ onText: "Amdi", type: "primary", react: "" }, (async (amdiWA) => {
    await semiAIchat( amdiWA );
}));

AMDI({ onText: "ඇම්ඩි", type: "primary", react: "🤖" }, (async (amdiWA) => {
    await semiAIchat( amdiWA );
}));

AMDI({ cmd: "hydra", desc: "test", react: "⚔️", type: "primary" }, (async (amdiWA) => {
    let { reply } = amdiWA.msgLayout

    return await reply("⚔️");
}));