import { opprettMaskin, hentAlleMaskiner } from "../models/maskinModels.js";

export async function registrerMaskin(req, res) {
    const { Maskinnavn, Serienummer } = req.body;

    if (!Maskinnavn || !Serienummer) {
        return res.json({
            success: false,
            message: "Fyll ut alle feltene"
        });
    }

    const { data, error } = await opprettMaskin(Maskinnavn, Serienummer);

    if (error) {
        return res.json({
            success: false,
            message: "Serienummer finnes allerede eller noe gikk galt"
        });
    }

    return res.json({
        success: true,
        data
    });
}

export async function hentMaskiner(req, res) {
    const { data, error } = await hentAlleMaskiner();

    if (error) {
        return res.json({
            success: false,
            message: "Kunne ikke hente maskiner"
        });
    }

    return res.json(data);
}