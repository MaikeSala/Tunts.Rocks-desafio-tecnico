import { Request, Response } from "express";
import { google, sheets_v4 } from 'googleapis';

const getAuthSheets = async() => {
    
    const auth = new google.auth.GoogleAuth({
        keyFile: 'credentials.json',
        scopes: 'https://www.googleapis.com/auth/spreadsheets'
    });

    const client = await auth.getClient();

    const googleSheet = google.sheets({
        version: 'v4',
        auth: client as any
    });

    const spreadsheetId = '1g5ClEqzP-zv0IF_aPcu0FAVdk3rVv2HYa26uP5kXd0E';

    return {
        auth,
        client,
        googleSheet,
        spreadsheetId
    };
}

export const metadata = async(req: Request, res: Response) => {

    const { googleSheet, auth, spreadsheetId } = await getAuthSheets();

    const metadata = await googleSheet.spreadsheets.get({
        auth,
        spreadsheetId
    })

    res.send(metadata.data);
}

export const getRows = async (req: Request, res: Response) => {
    const { googleSheet, auth, spreadsheetId } = await getAuthSheets();

    const getRows = await googleSheet.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: 'engenharia_de_software!A4:F27'
    });

    console.log(getRows.data);
    res.send(getRows.data);
}