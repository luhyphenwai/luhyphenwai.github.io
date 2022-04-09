using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DoorBlock : MonoBehaviour
{
    public void Toggle()
    {
        gameObject.SetActive(false);
        GetComponent<Animator>().SetTrigger("Trigger");
    }
}
