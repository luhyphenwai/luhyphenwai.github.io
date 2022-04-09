using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    public static GameManager gm;
    public bool playing;

    public int gridSize;
    public Animator cam;
    public Animator sideMenu;
    public BlockPlacer bp;
    private void Awake()
    {
        if (gm != this && gm != null) Destroy(gameObject);
        gm = this;
    }
    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {

    }

    public Vector2 SnapToGrid(Vector2 position)
    {
        return new Vector2(Mathf.Round(position.x / gridSize) * gridSize, Mathf.Round(position.y / gridSize) * gridSize);
    }

    public void Play()
    {
        sideMenu.SetBool("Playing", true);
        cam.SetBool("Playing", true);
        bp.placing = false;
        playing = true;
    }

    public void Edit()
    {
        sideMenu.SetBool("Playing", false);
        cam.SetBool("Playing", false);
        bp.placing = true;
        playing = false;
    }
}
