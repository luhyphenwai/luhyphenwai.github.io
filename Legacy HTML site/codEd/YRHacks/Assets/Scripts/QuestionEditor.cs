using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
using System;

public class QuestionEditor : MonoBehaviour
{
    public static QuestionEditor instance;

    public string question;
    public string[] answers;
    public List<int> correctAnswers;
    // Start is called before the first frame update
    void Start()
    {
        instance = this;
        answers = new string[4];
    }

    // Update is called once per frame
    void Update()
    {

    }
    public void SetQuestion(TMP_InputField t)
    {
        question = t.text;
    }
    public void SetAnswer(TMP_InputField t)
    {
        answers[Int32.Parse(t.name) - 1] = t.text;
    }
    public void SetValues(QuestionBlock q)
    {
        q.question = question;
        q.answers = answers;
        q.correctAnswers = correctAnswers.ToArray();
    }

    public void SetCorrectAnswer(Toggle t)
    {
        if (t.isOn) correctAnswers.Add(Int32.Parse(t.name) - 1);
        else correctAnswers.Remove(Int32.Parse(t.name));
    }

}
