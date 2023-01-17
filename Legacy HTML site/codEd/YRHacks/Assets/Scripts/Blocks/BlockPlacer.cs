using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BlockPlacer : MonoBehaviour
{
    public Transform[] previewBlocks;
    public Transform[] blocks;
    public int currentSelectedBlock;
    public bool placing;
    public QuestionBlock lastBlockPlaced;

    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        if (placing)
        {
            Vector3 mousePos = Input.mousePosition;
            mousePos = Camera.main.ScreenToWorldPoint(mousePos);
            mousePos = GameManager.gm.SnapToGrid(mousePos);
            mousePos.z = 0;

            for (int i = 0; i < previewBlocks.Length; i++)
            {
                previewBlocks[i].position = new Vector2(1000, 1000);
            }
            previewBlocks[currentSelectedBlock].position = mousePos;

            if (Input.GetMouseButton(0))
            {
                PlaceBlock();
            }
        }
    }



    public void SetSelectedBlock(int block)
    {
        currentSelectedBlock = block;
    }

    public void PlaceBlock()
    {

        Vector3 mousePos = Input.mousePosition;
        mousePos = Camera.main.ScreenToWorldPoint(mousePos);
        mousePos = GameManager.gm.SnapToGrid(mousePos);
        mousePos.z = 0;

        if (currentSelectedBlock == 1 && GameObject.FindGameObjectWithTag("Player") != null)
        {
            return;
        }
        else if (!Physics2D.Raycast(mousePos, Vector2.zero, 0) && currentSelectedBlock != 0)
        {
            GameObject last = Instantiate(blocks[currentSelectedBlock - 1], mousePos, Quaternion.identity).gameObject;

            if (lastBlockPlaced != null)
            {
                lastBlockPlaced.targetDoor = last.GetComponent<DoorBlock>();
            }
            else if (currentSelectedBlock == 3)
            {
                lastBlockPlaced = last.GetComponent<QuestionBlock>();
            }
        }
        else if (currentSelectedBlock == 0)
        {
            if (Physics2D.Raycast(mousePos, Vector2.zero, 0)) Destroy(Physics2D.Raycast(mousePos, Vector2.zero, 0).collider.gameObject);
        }
    }
}
