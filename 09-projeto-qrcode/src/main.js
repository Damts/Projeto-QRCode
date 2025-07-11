import prompt from "prompt"
import promptSchemaMain from "./prompts-schema/prompt-schema-main.js"
import createQRCode from "./services/qr-code/create.js"
import createPassword from "./services/password/create.js"

async function startPrompt() {
prompt.get(promptSchemaMain, async (err, choose) => {

        if(err)console.log(err)

        if(choose.select == 1) await createQRCode()
        if(choose.select == 2) await createPassword()
    })

    prompt.start()
}

export default startPrompt