using UnityEngine;
using UnityEditor;
using UnityEngine.UI;
using TMPro;
using System.Text.RegularExpressions;

public class FindInvalidUIText
{
   /*  [MenuItem("Tools/Playable/Find Invalid UI Text")]
    public static void FindInvalid()
    {
        Regex nonAscii = new Regex(@"[^\x00-\x7F]");

        Text[] texts = Object.FindObjectsOfType<Text>();
        foreach (Text t in texts)
        {
            if (!string.IsNullOrEmpty(t.text) && nonAscii.IsMatch(t.text))
            {
                Debug.LogWarning("[INVALID UI Text] " + GetPath(t.transform) + " | Text = " + t.text, t.gameObject);
            }
        }

        TMP_Text[] tmps = Object.FindObjectsOfType<TMP_Text>();
        foreach (TMP_Text t in tmps)
        {
            if (!string.IsNullOrEmpty(t.text) && nonAscii.IsMatch(t.text))
            {
                Debug.LogWarning("[INVALID TMP Text] " + GetPath(t.transform) + " | Text = " + t.text, t.gameObject);
            }
        }

        Debug.Log("===== INVALID TEXT CHECK DONE =====");
    }

    private static string GetPath(Transform t)
    {
        string path = t.name;
        while (t.parent != null)
        {
            t = t.parent;
            path = t.name + "/" + path;
        }
        return path;
    } */
}