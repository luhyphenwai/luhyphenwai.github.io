using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerBlock : MonoBehaviour
{

    public Vector2 targetPosition;
    public float speed;
    public LayerMask wallLayer;
    // Start is called before the first frame update
    void Start()
    {
        targetPosition = transform.position;
    }

    // Update is called once per frame
    void Update()
    {
        PlayerInput();
        if (GameManager.gm.playing) transform.position = Vector2.Lerp(transform.position, targetPosition, speed);
    }

    void PlayerInput()
    {
        Vector2 p = targetPosition;
        if (Input.GetKeyDown(KeyCode.LeftArrow))
        {
            targetPosition.x -= GameManager.gm.gridSize;
        }
        else if (Input.GetKeyDown(KeyCode.UpArrow))
        {

            targetPosition.y += GameManager.gm.gridSize;
        }
        else if (Input.GetKeyDown(KeyCode.DownArrow))
        {
            targetPosition.y -= GameManager.gm.gridSize;
        }
        else if (Input.GetKeyDown(KeyCode.RightArrow))
        {
            targetPosition.x += GameManager.gm.gridSize;
        }

        if (Physics2D.Raycast(targetPosition, Vector2.zero, 0, wallLayer))
        {
            targetPosition = p;
        }
    }
}
