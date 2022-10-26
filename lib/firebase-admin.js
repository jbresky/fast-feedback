import admin from "firebase-admin";

if(!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            client_email: "firebase-adminsdk-5rw3q@react2025-59185.iam.gserviceaccount.com",
            private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDDYu6qzOtVHVIN\nwEZ7QZxM7xl50FUwmkjVRxa/pWa2lE1WANFAIASufOIm+GvtN/jamy0etOWl+Lns\nWbPaIvqm6aPNfFsClEsY+haw4KR7bj5Dmn1rIXC/2RNzxdoezwsUqCBH2PcBopKK\nY/zR7r5Owpys9hTAnlZcoMm/H1R1eGFkHIiUETdb68ZTUCIAILwwImMzJckME5NB\nZ6ss9gwjVSYxBkiu6LRUSDgS8OHyJB3nZ+QFMHXAsEr81sIN1tzNTav39s3lQ8Bi\nZiSi3GLVqJtgPfyknxjkig4rA0CwJrbdZCQ8PdAxMfWwdPJiPDLKqTlekXwrFnaN\nQpisDvU3AgMBAAECggEAGAIvG5PEkxfgPkpTHtAoGZgDxGEiJq++pV5v4Cq93U+J\n1TiSfdOxX5N+4pUCBgsrrAkHWU+XLHbMucsn+3Ty4dGxzA0szbtVIwOQCDoCXBxm\n0D3KjYB1b02IQ2Cbdc+xJ9+k3888QtosMY8pwM4aWmk1gVdXo3eRWx5yy+ZYpXpn\nHqClEUbvYAiMq7X1Cfbz1h/zoNqnx68CGSHb6D31i1rUXU+wVyb/9RpUW62LT2g1\nYzYlvzHAVq5Cu5eAZwC8sGPq4VLQ8Q96yTZvjAMpxZe8tv+sl7r+5GeBZ/Yl1HLk\n43kvtIac+HhK9QFWRzK5bM/c6DlkJ4BqqQHovOrT8QKBgQD2AjXkKmkCgfK92ky9\nBR3rR4lvvfB2HbIUPD2yGjy3zNqoMh7RXrQ4EdBI+HoRCeCWZZ7iL4y9FSP2QvjH\nzb5XPkQimTluV1QiqrNjZ2LCQuoTEecTfyW/gtdgSb+mGvcTsThy0L4h8zmwbngS\nmpFlZDcT0b4l4M7LK2CVRo1FnwKBgQDLUmUseUwfpiBt980bKwNlA06qwvzozrGM\nfpGrL5fMZXigIg/BGf5H7lg5rln7wsykvWezfp26X30nfpKKnyxmXooFTywuwvqm\n4fiaj+q9ovDQQPm/vmTjho+fHWRaghbk/yeOBAOfZM7d/w/PxdrpY7wQ4lx/DC1X\nuyEfkUM5aQKBgQCFR7lOvjNaKnEKrqR4m7cT6xPouCz4sSnzkJeUUGao5ZFpIo5T\nvE1DO1Nu1T+8z28fzDqCLGTBZByxpKMIDM2ckp1zaTQWNbXdekHqDu8QdBRA9KgO\nhgo7cXWiMxJjuaQ2xQLiIXmBBzcwAQmIerlfByZX1ICCIQOoSv3uoeST3QKBgQCv\n8XUrryt4l8GoZ69Nu0MMvnfsvR8uNu7drQlRIbYyYfyoVdFcQKoShOZDw+SKQF/m\njyCV6xOCm+8pphYZbvR1AYpeXczWClPs5c7DsZZo0/+ftxpoGtIjMeZGwqB80eYN\n896+viqEXC/HW1jLa2OsY2nzEm8IYfk62ewn7QRHQQKBgQDHj5KY96sCUt/lW2ff\nCLobdT+ZdxXpSqokegftvUvaLtAXUtvKmCox94+9djwO14r7PfZvP+Dsyk6271aw\nALtCCDRewW8cv41XwYbVu9AOmLXiI9+p7foD48S+mUR79HF/Tw3MwUtBMq5/gilT\nP3ao76qWfs2WAvAW+q0dfEF7rw==\n-----END PRIVATE KEY-----\n",
            project_id: "react2025-59185",
        })
    })
}

const auth = admin.auth();
const db = admin.firestore();

export { auth, db }