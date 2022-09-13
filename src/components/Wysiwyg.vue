<!-- <template>
  <editor-content :editor="editor" />
</template>

<script>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

export default {
  components: {
    EditorContent,
  },

  setup() {
    const editor = useEditor({
      content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
      extensions: [
        StarterKit,
      ],
    })

    return { editor }
  },
}
</script> -->

<template>
  <editor-content :editor="editor" />
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

export default {
  components: {
    EditorContent,
  },


  data() {
    return {
      editor: null,
    }
  },

  mounted() {
    this.editor = new Editor({
      content: this.editor.setContent(this.body),
      extensions: [
        StarterKit,
      ],
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>