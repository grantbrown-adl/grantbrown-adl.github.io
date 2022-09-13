using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.VFX;

public class PointCloudRenderer : MonoBehaviour
{
    Texture2D texColor;
    Texture2D texPosScale;
    VisualEffect vfx;
    uint resolution = 4096;

    public float particleSize = 0.01f;
    bool toUpdate = false;
    uint particleCount = 0;

    public Vector3 boundSize;
    public Vector3 boundCentre;

    public Mesh mesh;

    public bool xDif, yDif, zDif;

    Vector3[] vertices;
    Color[] colors;

    private void Start()
    {
        vfx = GetComponent<VisualEffect>();

        // Vector3[] positions = new Vector3[(int)resolution * (int)resolution];
        colors = new Color[(int)resolution * (int)resolution];
        vertices = mesh.vertices;

        for (int x = 0; x < (int)resolution; x++)
        {
            for (int y = 0; y < (int)resolution; y++)
            {
                float distance = x / 500;
                // colors[x + y * (int)resolution] = new Color(vertices[x].x, vertices[y].y, vertices[x].z);
                // positions[x + y * (int)resolution] = new Vector3(Random.value * 10, Random.value * 10, Random.value * 10);
                colors[x + y * (int)resolution] = new Color(Random.value, Random.value, Random.value, 1);

                // colors[x + y * (int)resolution] = new Color(1, 1, 1, 1);
                //  colors[x + y * (int)resolution] = new Color()
            }
        }
        // SetParticles(positions, colors);

        SetParticles(vertices, colors);
    }

    private void Update()
    {
        if (Input.GetButtonDown("Fire1"))
        {
            // SetParticles(vertices, colors);
        }

        if (toUpdate)
        {
            toUpdate = false;

            vfx.Reinit();
            vfx.SetUInt(Shader.PropertyToID("ParticleCount"), particleCount);
            vfx.SetTexture(Shader.PropertyToID("TexColor"), texColor);
            vfx.SetTexture(Shader.PropertyToID("TexPosScale"), texPosScale);
            vfx.SetUInt(Shader.PropertyToID("Resolution"), resolution);
            vfx.SetVector3("BoundsSize", boundSize);
            vfx.SetVector3("BoundsCentre", boundCentre);
        }
    }

    public void SetParticles(Vector3[] positions, Color[] colors)
    {
        texColor = new Texture2D(positions.Length > (int)resolution ? (int)resolution : positions.Length, Mathf.Clamp(positions.Length / (int)resolution, 1, (int)resolution), TextureFormat.RGBAFloat, false);
        texPosScale = new Texture2D(positions.Length > (int)resolution ? (int)resolution : positions.Length, Mathf.Clamp(positions.Length / (int)resolution, 1, (int)resolution), TextureFormat.RGBAFloat, false);

        int texWidth = texColor.width;
        int texHeight = texColor.height;

        // Vector3[] reversi = positions;
        // System.Array.Reverse(reversi);

        for (int y = 0; y < texHeight; y++)
        {
            for (int x = 0; x < texWidth; x++)
            {
                int index = x + y * texWidth;

                // texColor.SetPixel(x, y, colors[index]);

                // Vector3 difference = new Vector3(Vector3.zero.x - positions[index].x, Vector3.zero.y - positions[index].y, Vector3.zero.z - positions[index].z);
                // float divisorZ = (difference.z / 15) + 0.05f;
                // float divisorX = (difference.x / 15) + 0.05f;
                // float divisorY = (difference.y / 15) + 0.05f;

                // Vector3 values = new Vector3(positions[index].x, positions[index].y, positions[index].z);
                // divisorZ = (values.z / 15) + 0.05f;
                // divisorX = (values.x / 15) + 0.05f;
                // divisorY = (values.y / 15) + 0.05f;


                // Vector3 values = new Vector3(positions[index].x, positions[index].y, positions[index].z);
                float minZ = remap(positions[index].z, 0, 3);
                // Debug.Log(minZ);

                // float divisorZ = (positions[index].z / 10) + 0.05f;
                // float divisorX = (positions[index].x / 10) + 0.05f;
                // float divisorY = (positions[index].y / 10) + 0.05f;
                float divisorZ = (minZ - 1) * -1;
                float divisorX = (positions[index].x / 10) + 0.05f;
                float divisorY = (positions[index].y / 10) + 0.05f;

                if (xDif) texColor.SetPixel(x, y, new Color(divisorX, divisorX, divisorX, 1));
                else if (yDif) texColor.SetPixel(x, y, new Color(divisorY, divisorY, divisorY, 1));
                else if (zDif) texColor.SetPixel(x, y, new Color(divisorZ, divisorZ, divisorZ, 1));
                else texColor.SetPixel(x, y, new Color(divisorZ, divisorZ, divisorZ, 1));


                // var data = new Color(255, 255, 255, 1);
                // var data = new Color(positions[index].x, positions[index].y, positions[index].z, particleSize);
                var data = new Color(positions[index].x, positions[index].y, positions[index].z, particleSize);
                texPosScale.SetPixel(x, y, data);

            }
        }

        texColor.Apply();
        texPosScale.Apply();
        particleCount = (uint)positions.Length;
        toUpdate = true;
    }


    float remap(float val, float min, float max)
    {
        return (val - min) / (max - min) * (1 - 0);
    }
}
