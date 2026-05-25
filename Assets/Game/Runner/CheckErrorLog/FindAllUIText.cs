using UnityEngine;
using UnityEditor;
using UnityEngine.UI;
using TMPro;

public class FindAllUIText
{
   /*  [MenuItem("Tools/Playable/Find All UI Text")]
    public static void FindAll()
    {
        Debug.Log("===== FIND ALL UI TEXT / TMP =====");

        Text[] texts = Object.FindObjectsOfType<Text>();
        foreach (Text t in texts)
        {
            Debug.Log("[UI Text] " + GetPath(t.transform) + " | Text = " + t.text, t.gameObject);
        }

        TMP_Text[] tmps = Object.FindObjectsOfType<TMP_Text>();
        foreach (TMP_Text t in tmps)
        {
            Debug.Log("[TMP Text] " + GetPath(t.transform) + " | Text = " + t.text, t.gameObject);
        }

        Debug.Log("===== DONE =====");
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