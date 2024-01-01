using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class QuestionBlock : MonoBehaviour
{
    public string question;
    public string[] answers;
    public int[] correctAnswers;

    public float questionTime;
    public bool correct;
    public bool questionRunning;
    public DoorBlock targetDoor;
    public bool playerInRange;

    [Header("UI")]
    public Animator uiAnim;
    public TMP_Text questionText;
    public TMP_Text[] answerTexts;

    // Start is called before the first frame update
    void Start()
    {
        questionText = GameObject.Find("Question").GetComponent<TMP_Text>();
        for (int i = 0; i < 4; i++)
        {
            answerTexts[i] = GameObject.Find("a" + (i + 1)).GetComponent<TMP_Text>();
        }
        uiAnim = GameObject.Find("Question Menu").GetComponent<Animator>();

        QuestionEditor.instance.SetValues(this);
    }

    // Update is called once per frame
    void Update()
    {
        if (playerInRange && Input.GetKeyDown(KeyCode.E))
        {
            StartQuestion();
        }
    }
    public void StartQuestion()
    {
        StartCoroutine(RunQuestion());
    }
    IEnumerator RunQuestion()
    {
        if (questionRunning) yield break;
        questionRunning = true;
        float time = 0;

        // SHOW UI
        uiAnim.SetBool("Show", true);
        questionText.text = question;
        for (int i = 0; i < answers.Length; i++)
        {
            answerTexts[i].text = answers[i];
        }

        while (time < questionTime)
        {
            if (Input.GetKeyDown(KeyCode.Alpha1) || Input.GetKeyDown(KeyCode.Alpha2) || Input.GetKeyDown(KeyCode.Alpha3) || Input.GetKeyDown(KeyCode.Alpha4))
            {
                for (int i = 0; i < correctAnswers.Length; i++)
                {
                    switch (correctAnswers[i])
                    {
                        case 0:
                            correct = Input.GetKeyDown(KeyCode.Alpha1);
                            break;
                        case 1:
                            correct = Input.GetKeyDown(KeyCode.Alpha2);
                            break;
                        case 2:
                            correct = Input.GetKeyDown(KeyCode.Alpha3);
                            break;
                        case 3:
                            correct = Input.GetKeyDown(KeyCode.Alpha4);
                            break;
                    }
                }

                EndQuestion();
                questionRunning = false;
                yield break;
            }
            yield return null;
            time += Time.deltaTime;
        }
        EndQuestion();
        questionRunning = false;
    }

    void EndQuestion()
    {
        if (correct && targetDoor != null)
        {

            targetDoor.Toggle();
        }
        GameObject.Find("Question Background").GetComponent<Animator>().SetTrigger(correct ? "Right" : "Wrong");
        uiAnim.SetBool("Show", false);
    }

    private void OnTriggerEnter2D(Collider2D other)
    {
        if (other.tag == "Player")
        {
            playerInRange = true;
        }
    }

    private void OnTriggerExit2D(Collider2D other)
    {
        if (other.tag == "Player")
        {
            playerInRange = false;
        }
    }
}
